import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company } from "./data/company";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${company.name} — Software House`,
  description: company.tagline,
  metadataBase: new URL(company.siteUrl),
  openGraph: {
    title: `${company.name} — Software House`,
    description: company.tagline,
    url: company.siteUrl,
    siteName: company.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${company.name} — ${company.tagline}`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
