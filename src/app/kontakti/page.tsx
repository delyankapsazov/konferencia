import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Контакти — Konferencia.BG",
  description: "Свържете се с Konferencia.BG за техническо обезпечаване на вашето събитие. Телефон: 0886 401 306, e-mail: office@konferencia.bg. Намираме се в София.",
  openGraph: {
    title: "Контакти | Konferencia.BG",
    description: "Svarzhe se s nas za tehnichesko obezpechavane na sabitieto vi. Tel: 0886 401 306.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
