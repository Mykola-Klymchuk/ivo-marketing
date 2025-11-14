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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivo-marketing.vercel.app';

export const metadata: Metadata = {
  title: "IVO - Practical Cleaning Innovation",
  description: "Supercharge your operations with efficient equipment – and win more tenders with innovation that works.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "IVO - Practical Cleaning Innovation",
    description: "Supercharge your operations with efficient equipment – and win more tenders with innovation that works.",
    url: siteUrl,
    siteName: "IVO",
    images: [
      {
        url: '/hero/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'IVO - Practical Cleaning Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IVO - Practical Cleaning Innovation",
    description: "Supercharge your operations with efficient equipment – and win more tenders with innovation that works.",
    images: ['/hero/hero-background.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
