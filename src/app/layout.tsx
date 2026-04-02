import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "КОНФЕРЕНЦИЯ БГ — Професионално техническо обезпечаване",
  description:
    "Konferencia.BG предлага професионално техническо обезпечаване на конференции, конгреси, работни срещи и симпозиуми — озвучаване, симултанен превод, мултимедия и още.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-cuprum">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
