import type { Metadata } from "next";
import localFont from "next/font/local";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar";
import { cn } from "@/lib/utils";

const centuryGothic = localFont({
  src: [
    {
      path: "../fonts/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/centurygothic_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-century-gothic",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Teo & Pau",
  description: "Wedding page for Teo & Pau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "scroll-smooth",
        "antialiased",
        centuryGothic.variable,
        dancingScript.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden scroll-smooth">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
