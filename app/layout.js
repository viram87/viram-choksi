import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://viram-choksi.vercel.app"),
  title: "Viram Choksi | Portfolio",
  description:
    "Frontend Developer specializing in React.js, Vue.js, and modern web technologies. Building responsive and performant web applications with 2.8+ years of experience.",
  keywords: [
    "Front-end Developer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Vue.js Developer",
  ],
  authors: [{ name: "Viram Choksi" }],
  creator: "Viram Choksi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viram-choksi.vercel.app",
    siteName: "Viram Choksi Portfolio",
    title: "Viram Choksi - Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Vue.js, and modern web technologies. Building responsive and performant web applications with 2.8+ years of experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Viram Choksi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viram Choksi - Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Vue.js, and modern web technologies. Building responsive and performant web applications with 2.8+ years of experience.",
    images: ["/og-image.jpg"],
    creator: "@viramchoksi",
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
