import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const museo900 = localFont({
  src: [
    {
      path: "../public/fonts/museo_900-webfont.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/museo_900-webfont.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-museo-900",
  display: "swap",
});

const articulatCFMedium = localFont({
  src: [
    {
      path: "../public/fonts/articulat_cf_medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/articulat_cf_medium-webfont.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-articulat-cf-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IVO - Practical Cleaning Innovation",
  description: "Supercharge your operations with efficient equipment – and win more tenders with innovation that works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${museo900.variable} ${articulatCFMedium.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
