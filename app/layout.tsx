import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./navbar";

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
      className={`${centuryGothic.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden scroll-smooth">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
