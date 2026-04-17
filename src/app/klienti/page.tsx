import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Наши клиенти — Konferencia.BG",
  description: "Konferencia.BG работи с над 30 водещи организации и компании в България — МОСВ, Erasmus+, Friedrich Ebert Stiftung, OLAF и много други.",
  openGraph: {
    title: "Клиенти на Konferencia.BG",
    description: "Nad 30 vodeshti organizatsii i kompanii — MOSV, Erasmus+, Friedrich Ebert Stiftung, OLAF i drugi.",
  },
};

const clients = [
  { file: "mosv.jpg", alt: "МОСВ" },
  { file: "sofia-ring.jpg", alt: "Sofia Ring Mall" },
  { file: "nsa.jpg", alt: "НСА" },
  { file: "Erasmus.jpg", alt: "Erasmus+" },
  { file: "City-hotel.jpg", alt: "City Hotel" },
  { file: "crxr.jpg", alt: "CRXR" },
  { file: "dlo.jpg", alt: "Дентално лазерно общество" },
  { file: "DMI.jpg", alt: "DMI Development" },
  { file: "dream-trips.jpg", alt: "Dream Trips" },
  { file: "fed-na-zemedelieto.jpg", alt: "Федерация на земеделието" },
  { file: "FES.jpg", alt: "Friedrich Ebert Stiftung" },
  { file: "forteam.jpg", alt: "Forteam" },
  { file: "haycad.jpg", alt: "Haycad" },
  { file: "ilan.jpg", alt: "ILAN" },
  { file: "instituto-italiano-di-cultura.jpg", alt: "Instituto Italiano di Cultura" },
  { file: "krassi.jpg", alt: "Krassi" },
  { file: "marginalia.jpg", alt: "Marginalia" },
  { file: "car-of-the-year.jpg", alt: "Car of the Year" },
  { file: "ncoz.jpg", alt: "НЦОЗ" },
  { file: "nsoijp.jpg", alt: "НСОИЙП" },
  { file: "zara-lab.jpg", alt: "ZARA Lab" },
  { file: "bit.jpg", alt: "BIT" },
  { file: "vakanzia-bg.jpg", alt: "Ваканция БГ" },
  { file: "Travel-time-BG.jpg", alt: "Travel Time BG" },
  { file: "saiuz-na-stopanskata-iniciativa.jpg", alt: "Съюз на Стопанската Инициатива" },
  { file: "ruse.jpg", alt: "Русе" },
  { file: "Puressentiel.jpg", alt: "Puressentiel" },
  { file: "parketen-sviat.jpg", alt: "Паркетен свят" },
  { file: "one-architecture-week.jpg", alt: "One Architecture Week" },
  { file: "olaf.jpg", alt: "OLAF" },
];

const sidebar = [
  { name: "ОЗВУЧАВАНЕ", href: "/озвучаване" },
  { name: "СИМУЛТАНЕН ПРЕВОД", href: "/симултанен-превод" },
  { name: "МУЛТИМЕДИЯ", href: "/мултимедия" },
  { name: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/дизайн-и-осветление" },
  { name: "ТУР ГАЙД СИСТЕМА", href: "/тур-гайд-система" },
  { name: "ЗАПИС И СТРИЙМИНГ", href: "/запис-и-стрийминг" },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero banner — background image, left-aligned title */}
      <section className="relative overflow-hidden">
        <Image
          src="/header-clients.jpg"
          alt="Клиенти"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">КЛИЕНТИ</h1>
        </div>
      </section>

      {/* Content: logo grid + sidebar */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Logo grid */}
            <div className="lg:flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {clients.map((client) => (
                  <div
                    key={client.file}
                    className="flex items-center justify-center border border-gray-200 p-3 h-28 hover:border-red transition-colors duration-300"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={`/clients/${client.file}`}
                        alt={client.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-52 shrink-0">
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
