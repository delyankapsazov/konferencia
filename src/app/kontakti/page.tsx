"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";

const contactCards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "E-mail",
    value: "office@konferencia.bg",
    href: "mailto:office@konferencia.bg",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Телефон:",
    value: "0886 401 306",
    href: "tel:0886401306",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    value: "konferencia.bg",
    href: "https://www.facebook.com/konferencia.bg/",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = "Запитване от Konferencia.bg";
    const body = [
      `Име: ${name}`,
      `Телефон: ${phone || "-"}`,
      `E-mail: ${email}`,
      "",
      "Съобщение:",
      message,
    ].join("\n");

    window.location.href = `mailto:office@konferencia.bg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/header9.jpg" alt="Контакти" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">КОНТАКТИ</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center text-center bg-gray-section border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-red/50 transition-all duration-300 group"
              >
                <div className="text-red mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-dark font-bold text-lg mb-1">{card.label}</h3>
                <p className="text-gray-600 group-hover:text-red transition-colors">{card.value}</p>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-2">Пишете ни</h2>
            <div className="h-[3px] w-16 bg-red mx-auto mb-8" />

            {submitted ? (
              <div className="text-center py-12 bg-gray-section rounded-xl border border-gray-200">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-dark mb-2">Благодарим ви!</h3>
                <p className="text-gray-600">Ще се свържем с вас възможно най-скоро.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1">
                    Вашето име
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-red outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-red outline-none transition-colors"
                      placeholder="+359 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1">
                      Вашият e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-red outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1">
                    Вашето съобщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-red outline-none transition-colors resize-y"
                    placeholder="Опишете вашите нужди..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red hover:bg-red-dark text-white font-bold py-3 px-6 rounded-lg transition-colors uppercase tracking-wider text-sm"
                >
                  Изпратете
                </button>
              </form>
            )}
          </div>

          {/* Google Maps embed */}
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5967738511054!2d23.364713648458018!3d42.691083049730416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85ed5c51f9bd%3A0x70ba69641fd15c80!2sReduta%2C%20ul.%20%22Rumen%20voyvoda%22%202%2C%201505%20Sofia!5e0!3m2!1sen!2sbg!4v1736519986603!5m2!1sen!2sbg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konferencia.BG location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
