import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Симултанен превод — оборудване за конференции",
  description: "Професионални цифрови системи за симултанен превод Bosch и Sennheiser с перфектно качество на звука. Кабини с вградена звукоизолация за международни събития.",
  openGraph: {
    title: "Симултанен превод за конференции | Konferencia.BG",
    description: "Tsifrovi sistemi za simultanen prevod Bosch i Sennheiser. Kabini s zvukoizolatsiya za mezhdunarodni sabitiya.",
    images: [{ url: "/img3.1-min.jpg", width: 1200, height: 900, alt: "Система за симултанен превод" }],
  },
};

const sections = [
  {
    title: "Професионални цифрови системи",
    description:
      "Предлагаме професионални цифрови системи за симултанен превод на фирмите Bosch и Sennheiser с перфектно качество на звука.",
    image: "/img3.1-min.jpg",
  },
  {
    title: "Кабина симултанен превод",
    description:
      "За качествен симултанен превод ви предлагаме кабина с вградена звукоизолация.",
    image: "/img3.3-min.jpg",
  },
];

const sidebar = [
  { name: "ОЗВУЧАВАНЕ", href: "/озвучаване" },
  { name: "СИМУЛТАНЕН ПРЕВОД", href: "/симултанен-превод" },
  { name: "МУЛТИМЕДИЯ", href: "/мултимедия" },
  { name: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/дизайн-и-осветление" },
  { name: "ТУР ГАЙД СИСТЕМА", href: "/тур-гайд-система" },
  { name: "ЗАПИС И СТРИЙМИНГ", href: "/запис-и-стрийминг" },
];

export default function SimultanenPrevodPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/header2-min.jpg" alt="Симултанен превод" fill sizes="100vw" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">СИМУЛТАНЕН ПРЕВОД</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="lg:flex-1">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10">
                <strong>Симултанен превод</strong> се използва при международни обществени, културни и други събития.
                Извършва се едновременно с изказването на оратора. За него е необходимо специално
                техническо оборудване за преводачите и за слушателите.
              </p>
              <div className="grid gap-12">
                {sections.map((section, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                  >
                    <div className="md:w-1/2 relative aspect-[4/3] w-full shadow-[0_0_7px_0_rgba(0,0,0,0.5)] overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-dark mb-4 uppercase">
                        <span className="inline-block w-5 h-0.5 bg-red mr-2 translate-y-[-3px]" />
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{section.description}</p>
                    </div>
                  </div>
                ))}
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
