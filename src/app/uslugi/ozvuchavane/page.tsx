import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Озвучаване на конференции и събития",
  description: "Професионални озвучителни системи, дискусионни и безжични микрофони, аудио миксери за конференции, конгреси и корпоративни събития от Konferencia.BG.",
  alternates: { canonical: "https://konferencia.bg/uslugi/ozvuchavane" },
  openGraph: {
    url: "https://konferencia.bg/uslugi/ozvuchavane",
    title: "Озвучаване на конференции | Konferencia.BG",
    description: "Ozvuchitelni sistemi, diskusionni i bezhichni mikrofoni, audio mikseri za konferentsii.",
    images: [{ url: "/img2.1.jpg", width: 1200, height: 900, alt: "Озвучителни тела за конференции" }],
  },
};

const sections = [
  {
    title: "Озвучителни тела",
    description:
      "Високо технологични озвучителни тела, които гарантират възпроизвеждането на всеки звук и мощност според големината на събитието и броя на аудиторията",
    image: "/img2.1.jpg",
  },
  {
    title: "Дискусионни микрофони",
    description:
      "Надеждна система от чувствителни микрофони със стилен дизайн и лесно управление. Председателският микрофон позволява пълен контрол над дискусията",
    image: "/img2.2.jpg",
  },
  {
    title: "Безжични микрофони",
    description:
      "Безжични микрофони и микрофони тип брошка предлагащи комфорт и качествен звук",
    image: "/img2.3.jpg",
  },
  {
    title: "Аудио миксери",
    description:
      "Аудио миксери с различен брой микрофонни канали, мощни предусилватели и вградени ефекти за балансирана звукова картина",
    image: "/img2.4.jpg",
  },
];

const sidebar = [
  { name: "ОЗВУЧАВАНЕ", href: "/uslugi/ozvuchavane" },
  { name: "СИМУЛТАНЕН ПРЕВОД", href: "/uslugi/simultanen-prevod" },
  { name: "МУЛТИМЕДИЯ", href: "/uslugi/multimediya" },
  { name: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/uslugi/dizain-i-osvetlenie" },
  { name: "ТУР ГАЙД СИСТЕМА", href: "/uslugi/turgid-sistema" },
  { name: "ЗАПИС И СТРИЙМИНГ", href: "/uslugi/zapis-i-striyming" },
];

export default function OzvuchavanePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/header1.jpg" alt="Озвучаване" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">ОЗВУЧАВАНЕ</h1>
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
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-dark mb-4 uppercase relative">
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
