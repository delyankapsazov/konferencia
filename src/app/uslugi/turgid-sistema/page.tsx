import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Тур гайд система за конференции и екскурзии",
  description: "Удобна и лека многоканална тур гайд система с широк обхват и живот на батериите до 20 часа. Подходяща за конференции, обиколки и образователни мероприятия.",
  alternates: { canonical: "https://konferencia.bg/uslugi/turgid-sistema" },
  openGraph: {
    url: "https://konferencia.bg/uslugi/turgid-sistema",
    title: "Тур гайд система | Konferencia.BG",
    description: "Mnogokanalna tur gayd sistema s shirok obhvat i zhivot na bateriite do 20 chasa.",
  },
};

const sidebar = [
  { name: "ОЗВУЧАВАНЕ", href: "/uslugi/ozvuchavane" },
  { name: "СИМУЛТАНЕН ПРЕВОД", href: "/uslugi/simultanen-prevod" },
  { name: "МУЛТИМЕДИЯ", href: "/uslugi/multimediya" },
  { name: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/uslugi/dizain-i-osvetlenie" },
  { name: "ТУР ГАЙД СИСТЕМА", href: "/uslugi/turgid-sistema" },
  { name: "ЗАПИС И СТРИЙМИНГ", href: "/uslugi/zapis-i-striyming" },
];

export default function TurgidSistemaPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/header001.jpg" alt="Тур гайд система" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">ТУР ГАЙД СИСТЕМА</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="lg:flex-1">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 relative aspect-[4/3] w-full shadow-[0_0_7px_0_rgba(0,0,0,0.5)] overflow-hidden">
                  <Image src="/img6.1.jpg" alt="Тур гайд система" fill className="object-cover" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-dark mb-4 uppercase">
                    <span className="inline-block w-5 h-0.5 bg-red mr-2 translate-y-[-3px]" />
                    Тур гайд система
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Удобна и лека, многоканална тур гайд система с широк обхват. Подходяща за дълги туристически обиколки. Живот на батериите до 20 часа.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-[#f3f3f3] px-6 py-4">
                <h3 className="text-base font-bold text-dark uppercase border-b-2 border-black pb-2 mb-3 pl-1">
                  УСЛУГИ
                </h3>
                <nav className="space-y-0">
                  {sidebar.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 px-1 text-sm font-semibold text-dark hover:text-red transition-colors uppercase tracking-wide"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
