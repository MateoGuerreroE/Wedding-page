import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bucket = process.env.AWS_S3_BUCKET;
const galleryPrefix = process.env.AWS_S3_GALLERY_PREFIX;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials:
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
});

export async function GET(request: Request): Promise<NextResponse> {
  try {
    if (!bucket || !process.env.AWS_REGION) {
      return NextResponse.json(
        { error: "Missing S3 configuration" },
        { status: 500 },
      );
    }
    const searchParams = new URL(request.url).searchParams;

    const filename = searchParams.get("filename");
    if (!filename) {
      return NextResponse.json(
        { error: "Missing photo filename" },
        { status: 400 },
      );
    }
    const decodedFilename = decodeURIComponent(filename);

    if (!isValidFilename(decodedFilename)) {
      return NextResponse.json(
        { error: "Invalid photo filename" },
        { status: 400 },
      );
    }

    const key = `${galleryPrefix}${decodedFilename}`;

    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({
        Bucket: bucket,
        Key: key,
        ResponseContentDisposition: "inline",
      }),
      {
        expiresIn: 15 * 60,
      },
    );

    return NextResponse.redirect(url, 307);
  } catch (error) {
    if (isS3NotFoundError(error)) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    console.error("Failed to retrieve gallery photo:", error);

    return NextResponse.json(
      { error: "Failed to retrieve photo" },
      { status: 500 },
    );
  }
}

function isValidFilename(filename: string): boolean {
  if (!filename || filename.includes("/") || filename.includes("\\")) {
    return false;
  }

  return /^[a-zA-Z0-9._ -]+\.(jpe?g|png|webp|avif)$/i.test(filename);
}

function isS3NotFoundError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  const awsError = error as Error & {
    name?: string;
    $metadata?: {
      httpStatusCode?: number;
    };
  };

  return (
    awsError.name === "NotFound" ||
    awsError.name === "NoSuchKey" ||
    awsError.$metadata?.httpStatusCode === 404
  );
}
