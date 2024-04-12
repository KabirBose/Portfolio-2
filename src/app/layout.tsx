import type { Metadata } from "next";

import "./globals.css";

import { Work_Sans, Space_Mono } from "next/font/google";
import StretchPro from "next/font/local";

const work_sans = Work_Sans({ subsets: ["latin"] });
const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});
const stretch_pro = StretchPro({
  src: "../fonts/StretchPro.otf",
  variable: "--font-stretch-pro",
});

export const metadata: Metadata = {
  title: "Kabir's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_sans.className} ${stretch_pro.variable} ${space_mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
