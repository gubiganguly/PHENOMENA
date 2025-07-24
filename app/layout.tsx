import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Phenomena Global - The Future Awaits",
  description: "Exclusive access to the world's most influential network. By invitation only. September 10th, 2025.",
  keywords: "phenomena global, exclusive, elite, power, influence, september 2025",
  authors: [{ name: "Phenomena Global" }],
  openGraph: {
    title: "Phenomena Global",
    description: "The convergence of influence. The alignment of vision. The phenomena of change.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phenomena Global",
    description: "The Future Awaits",
  },
  robots: {
    index: false, // Keep exclusive/mysterious
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
