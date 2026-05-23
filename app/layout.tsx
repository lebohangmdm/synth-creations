import type { Metadata } from "next";

import { Roboto, Inter } from "next/font/google";

import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "SynthCreations - Modern Web Solutions",
    template: "%s | SynthCreations",
  },

  description: "Modern web solutions built with Next.js",

  keywords: [
    "Next.js",
    "Web Development",
    "Online Presence",
    "Web Design",
    "South Africa",
  ],

  authors: [{ name: "SynthCreations" }],

  creator: "SynthCreations",

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://yourdomain.com",
    siteName: "Your Brand Name",
    title: "Your Brand Name",
    description: "Build a Website That Grows Your Online Presence",
    images: [
      {
        url: "/blue-suit.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`${roboto.className} min-h-full flex flex-col antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton
          phoneNumber="27788931861"
          message="Hello 👋 I need help with your services"
        />
      </body>
    </html>
  );
}
