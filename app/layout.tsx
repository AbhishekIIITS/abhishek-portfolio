
import type { Metadata } from "next";
import LoadingScreen from "@/components/LoadingScreen";
import PersonSchema from "@/components/PersonSchema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheksonkar.in"),

  title: {
    default: "Abhishek Sonkar | Computer Science Engineer",
    template: "%s | Abhishek Sonkar",
  },

  description:
    "Abhishek Sonkar is a B.Tech Computer Science and Engineering student at IIIT Surat. Explore his portfolio, software development projects, technical skills, GitHub repositories, and resume.",

  applicationName: "Abhishek Sonkar Portfolio",

  authors: [
    {
      name: "Abhishek Sonkar",
      url: "https://abhisheksonkar.in",
    },
  ],

  creator: "Abhishek Sonkar",
  publisher: "Abhishek Sonkar",

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
    url: "/",
    siteName: "Abhishek Sonkar Portfolio",
    title: "Abhishek Sonkar | Computer Science Engineer",
    description:
      "Official portfolio of Abhishek Sonkar, B.Tech CSE student at IIIT Surat. Explore projects, technical skills, GitHub, and software development work.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Sonkar - Computer Science Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Sonkar | Computer Science Engineer",
    description:
      "B.Tech CSE student at IIIT Surat. Explore Abhishek Sonkar's portfolio, projects, and technical skills.",
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
