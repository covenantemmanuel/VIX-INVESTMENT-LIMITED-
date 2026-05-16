import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "VIX Investment Limited | Smart Energy & Infrastructure Holdings",
  description:
    "VIX Investment Limited is a premium African investment holding company powering renewable energy, CCTV security, smart infrastructure, and sustainable development through VIX Energy.",
  keywords: [
    "VIX Investment Limited",
    "VIX Energy",
    "solar installation Nigeria",
    "renewable energy Africa",
    "CCTV installation",
    "smart power infrastructure",
    "investment holding company"
  ],
  openGraph: {
    title: "VIX Investment Limited",
    description: "Powering Africa Through Smart Energy Solutions.",
    type: "website",
    locale: "en_NG",
    siteName: "VIX Investment Limited"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
