import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Antonio, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amraz.dev";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Amraz Rafeeque Portfolio",
    default: "Amraz Rafeeque | Freelance Full-Stack Developer & SaaS Architect",
  },
  description: "Senior freelance developer specializing in modern SaaS platforms, high-performance web applications, and intuitive UI/UX design.",
  keywords: [
    "Amraz Rafeeque",
    "Freelance Web Developer",
    "SaaS Architect",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Custom Software Development",
    "Creative Web Engineering"
  ],
  authors: [{ name: "Amraz Rafeeque", url: baseUrl }],
  creator: "Amraz Rafeeque",
  publisher: "Amraz Rafeeque",
  category: "technology",
  applicationName: "Amraz Rafeeque Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "./",
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Amraz Rafeeque | Freelance Full-Stack Developer & SaaS Architect",
    description: "I partner with founders to turn ideas into real products. Specialized in custom SaaS, modern web applications, and creative engineering.",
    url: baseUrl,
    siteName: "Amraz Rafeeque Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/amraz.png",
        width: 1200,
        height: 630,
        alt: "Amraz Rafeeque Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amraz Rafeeque | Freelance Full-Stack Developer & SaaS Architect",
    description: "I partner with founders to turn ideas into real products. Specialized in custom SaaS, modern web applications, and creative engineering.",
    images: ["/amraz.png"],
    creator: "@AmrazRafee13679",
  },
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${antonio.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

