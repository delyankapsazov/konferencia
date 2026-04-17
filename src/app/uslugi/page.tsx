import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги за техническо обезпечаване на конференции",
  description: "Пълен набор от услуги за техническо обезпечаване — озвучаване, симултанен превод, мултимедия, осветление, тур гайд система и стрийминг за всякакъв тип събития.",
  openGraph: {
    title: "Услуги за техническо обезпечаване | Konferencia.BG",
    description: "Озвучаване, симултанен превод, мултимедия, осветление, тур гайд система и стрийминг.",
  },
};

const services = [
  { title: "ОЗВУЧАВАНЕ", href: "/озвучаване", image: "/blurb01.jpg" },
  { title: "МУЛТИМЕДИЯ", href: "/мултимедия", image: "/blurb03.jpg" },
  { title: "ТУР ГАЙД СИСТЕМА", href: "/тур-гайд-система", image: "/blurb001.jpg" },
  { title: "СИМУЛТАНЕН ПРЕВОД", href: "/симултанен-превод", image: "/blurb02.jpg" },
  { title: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/дизайн-и-осветление", image: "/blurb04.jpg" },
  { title: "ЗАПИС И СТРИЙМИНГ", href: "/запис-и-стриминг", image: "/blurb06.jpg" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner — background image, left-aligned title */}
      <section className="relative overflow-hidden">
        <Image
          src="/header7.jpg"
          alt="Услуги"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">УСЛУГИ</h1>
        </div>
      </section>

      {/* Services grid — 2-column photo grid matching original */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden shadow-[0_0_7px_0_rgba(0,0,0,0.75)] group-hover:shadow-lg transition-shadow">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-3 text-center text-base font-semibold text-dark group-hover:text-red transition-colors uppercase tracking-wide">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
