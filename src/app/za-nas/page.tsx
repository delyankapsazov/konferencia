import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "За нас — Konferencia.BG",
  description: "Konferencia.BG е компания за професионално техническо обезпечаване на конференции, конгреси, работни срещи и симпозиуми. Разполагаме с дългогодишен опит и професионално оборудване.",
  openGraph: {
    title: "За нас | Konferencia.BG",
    description: "Kompaniya za tehnichesko obezpechavane na konferentsii s dalgogodishen opit.",
  },
};

const sidebar = [
  { name: "ОЗВУЧАВАНЕ", href: "/озвучаване" },
  { name: "СИМУЛТАНЕН ПРЕВОД", href: "/симултанен-превод" },
  { name: "МУЛТИМЕДИЯ", href: "/мултимедия" },
  { name: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/дизайн-и-осветление" },
  { name: "ТУР ГАЙД СИСТЕМА", href: "/тур-гайд-система" },
  { name: "ЗАПИС И СТРИЙМИНГ", href: "/запис-и-стрийминг" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner — dark with background image, left-aligned title */}
      <section className="relative overflow-hidden">
        <Image
          src="/header8.jpg"
          alt="За нас"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">ЗА НАС</h1>
        </div>
      </section>

      {/* Content: main text + sidebar */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="lg:flex-1">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
                Професионалното техническо обезпечаване е{" "}
                <strong className="text-red font-bold">неделима</strong> и много важна
                част от всяко събитие. Ние от{" "}
                <strong className="text-red font-bold">Konferencia.bg</strong> предлагаме
                всичко необходимо за безпроблемното протичане на вашите конференции,
                конгреси, работни срещи, симпозиуми и др.
              </p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8">
                Разполагаме с{" "}
                <strong className="text-red font-bold">професионално</strong> оборудване
                за различни по вид и мащаб събития. Екипът ни е с дългогодишен опит и ще
                се погрижи да покрие{" "}
                <strong className="text-red font-bold">всичките ви изисквания</strong>.
              </p>

              <div className="relative w-full aspect-[46/15] shadow-[0_0_7px_0_rgba(0,0,0,0.75)] overflow-hidden">
                <Image
                  src="/about-img.jpg"
                  alt="Конференция БГ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                />
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
