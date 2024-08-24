import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatsApp Instant Message",
  description:
    "Send WhatsApp messages instantly without saving contacts. Simplify your messaging with ease.",
  keywords:
    "WhatsApp, instant message, messaging tool, contactless communication, quick messages",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "WhatsApp Instant Message",
    description: "Send WhatsApp messages instantly without saving contacts.",
    url: "https://mustafaberat.vercel.app/",
    siteName: "WhatsApp Instant Message",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WhatsApp Instant Message</title>
        {/* Favicon and Icons */}
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <meta property="og:title" content="WhatsApp Instant Message" />
        <meta
          property="og:description"
          content="Send WhatsApp messages instantly without saving contacts."
        />
        <meta property="og:url" content="https://mustafaberat.vercel.app/" />
        <meta property="og:site_name" content="WhatsApp Instant Message" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
