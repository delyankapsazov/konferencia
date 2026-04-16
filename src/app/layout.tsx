import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const BASE_URL = "https://konferencia.bg";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "КОНФЕРЕНЦИЯ БГ — Професионално техническо обезпечаване",
    template: "%s | Konferencia.BG",
  },
  description:
    "Konferencia.BG предлага професионално техническо обезпечаване на конференции, конгреси, работни срещи и симпозиуми — озвучаване, симултанен превод, мултимедия и още.",
  keywords: [
    "техническо обезпечаване",
    "конференции",
    "озвучаване",
    "симултанен превод",
    "мултимедия",
    "осветление",
    "стрийминг",
    "тур гайд система",
    "конгреси",
    "симпозиуми",
    "Sofia",
    "България",
  ],
  authors: [{ name: "Konferencia.BG", url: BASE_URL }],
  creator: "Konferencia.BG",
  publisher: "Konferencia.BG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 160,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: BASE_URL,
    siteName: "Konferencia.BG",
    title: "КОНФЕРЕНЦИЯ БГ — Професионално техническо обезпечаване",
    description:
      "Profesionalno tehnichesko obezpechavane na konferentsii, kongresi, rabotni sreshti i simpoziumi v Bulgaria.",
    images: [
      {
        url: "/header1.jpg",
        width: 1200,
        height: 630,
        alt: "Konferencia.BG — техническо обезпечаване на конференции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "КОНФЕРЕНЦИЯ БГ — Професионално техническо обезпечаване",
    description:
      "Profesionalno tehnichesko obezpechavane na konferentsii, kongresi, rabotni sreshti i simpoziumi v Bulgaria.",
    images: ["/header1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Konferencia.BG",
  alternateName: "КОНФЕРЕНЦИЯ БГ",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  description:
    "Profesionalno tehnichesko obezpechavane na konferentsii, kongresi, rabotni sreshti i simpoziumi — ozvuchavane, simultanen prevod, multimediya, dizain i osvetlenie, tur gayd sistema, zapis i striyming.",
  telephone: "+359886401306",
  email: "office@konferencia.bg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Румен войвода 2",
    addressLocality: "София",
    postalCode: "1505",
    addressCountry: "BG",
  },
  sameAs: ["https://www.facebook.com/konferencia.bg/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги за техническо обезпечаване",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Озвучаване" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Симултанен превод" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Мултимедия" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Дизайн и осветление" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Тур гайд система" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Запис и стрийминг" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-cuprum">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
