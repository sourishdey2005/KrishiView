import type { Metadata } from "next";
import { Public_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "KrishiRakshak",
  description: "Ancient Wisdom, Modern Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${publicSans.variable} ${rajdhani.variable} font-display`}
      >
        {children}
      </body>
    </html>
  );
}
