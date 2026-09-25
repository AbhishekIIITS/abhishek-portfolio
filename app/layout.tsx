

import type { Metadata } from "next";
import LoadingScreen from "@/components/LoadingScreen";
import PersonSchema from "@/components/PersonSchema";
import "./globals.css";

const siteUrl = "https://abhisheksonkar.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Abhishek Sonkar | Official Website & Portfolio",
    template: "%s | Abhishek Sonkar",
  },

  description:
    "Abhishek Sonkar is a B.Tech Computer Science and Engineering student at IIIT Surat. Explore his official portfolio, software development projects, technical skills, GitHub repositories, and resume.",

  applicationName: "Abhishek Sonkar",

  authors: [
    {
      name: "Abhishek Sonkar",
      url: siteUrl,
    },
  ],

  creator: "Abhishek Sonkar",
  publisher: "Abhishek Sonkar",

  keywords: [
    "Abhishek Sonkar",
    "Abhishek Sonkar IIIT Surat",
    "Abhishek Sonkar portfolio",
    "Abhishek Sonkar CSE",
    "Abhishek Sonkar developer",
    "IIIT Surat Computer Science",
    "Software Developer Portfolio",
    "Web Development Projects",
    "GitHub AbhishekIIITS",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Abhishek Sonkar",
    title: "Abhishek Sonkar | Official Website & Portfolio",
    description:
      "Official website of Abhishek Sonkar, B.Tech Computer Science and Engineering student at IIIT Surat. Explore projects, programming skills, software development work, and GitHub repositories.",

    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Sonkar - Official Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Sonkar | Official Website & Portfolio",
    description:
      "Official portfolio of Abhishek Sonkar, CSE student at IIIT Surat. Explore projects, technical skills, and software development work.",
    images: ["/profile.jpg"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}
