import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Мултимедия за конференции — проектори и екрани",
  description: "DLP проектори с висока резолюция, прожекционни екрани и професионален софтуер за визуални решения. Видео мапинг и картина в картина за конгреси и корпоративни събития.",
  openGraph: {
    title: "Мултимедия за конференции | Konferencia.BG",
    description: "DLP proektori, prozhektsionni ekrani i profesionalen softuer za vizualni resheniya na konferentsii.",
    images: [{ url: "/img4.2.jpg", width: 1200, height: 900, alt: "Мултимедиен проектор за конференция" }],
  },
};

const sections = [
  {
    title: "Мултимедийни проектори",
    description:
      "Мултимедийни проектори с DLP технология осигуряваща изключително чиста картина с висока резолюция и перфектен фокус. Зрителят може да се наслади на картината от 25% до 40% по-близко разстояние пред екрана поради липсата на пикселизация за разлика от обикновените проектори. Наситено черно и високите нива на контраст правят картината по-жива и по-реална.",
    image: "/img4.2.jpg",
  },
  {
    title: "Прожекционни екрани",
    description:
      "Прожекционни екрани с различна големина и технология предотвратяваща загуби на светлина и отразяване.",
    image: "/img4.3.jpg",
  },
  {
    title: "Професионален софтуер",
    description:
      "Професионален софтуер предлагащ богат набор от опции за прожектиране: картина в картина, прожектиране от различен ъгъл, разполовяване на картина от два или повече източника с цел уголемяване на изображението, прожектиране върху неравни повърхности или така наречения мапинг и много други",
    image: "/img4.2.jpg",
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

export default function MultimediyaPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/header3.jpg" alt="Мултимедия" fill sizes="100vw" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">МУЛТИМЕДИЯ</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="lg:flex-1">
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
