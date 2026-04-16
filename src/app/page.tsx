import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "ОЗВУЧАВАНЕ", href: "/uslugi/ozvuchavane", image: "/blurb01.jpg" },
  { title: "МУЛТИМЕДИЯ", href: "/uslugi/multimediya", image: "/blurb03.jpg" },
  { title: "ТУР ГАЙД СИСТЕМА", href: "/uslugi/turgid-sistema", image: "/blurb001.jpg" },
  { title: "СИМУЛТАНЕН ПРЕВОД", href: "/uslugi/simultanen-prevod", image: "/blurb02.jpg" },
  { title: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/uslugi/dizain-i-osvetlenie", image: "/blurb04.jpg" },
  { title: "ЗАПИС И СТРИЙМИНГ", href: "/uslugi/zapis-i-striyming", image: "/blurb06.jpg" },
];

const features = [
  {
    bg: "bg-red",
    title: "Безпроблемно протичане на Вашето събитие",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    bg: "bg-red-mid",
    title: "Професионално оборудване за всяка нужда",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L3 12.38m3.32-2.31L3 7.75m8.42 7.42l5.1-5.1m0 0L19.83 12.38m-3.31-2.31L19.83 7.75M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
      </svg>
    ),
  },
  {
    bg: "bg-red-light",
    title: "Професионален екип с дългогодишен опит",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: 480 }}>
        <Image
          src="/header1.jpg"
          alt="Конференция БГ — техническо обезпечаване"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[43px] font-bold text-white tracking-tight">
              Техническо обезпечаване на конферентни и конгресни мероприятия
            </h1>
            <div className="mt-8">
              <a
                href="#uslugi"
                className="inline-block border-2 border-white text-white bg-transparent hover:bg-red hover:border-red font-bold px-8 py-3 transition-colors text-sm uppercase tracking-wider"
              >
                НАДОЛУ
              </a>
            </div>
            <p className="mt-8 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Всичко необходимо за безпроблемното протичане на Вашето събитие
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="uslugi" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[38px] font-bold text-dark uppercase inline-block pb-3 border-b-[3px] border-black">
              УСЛУГИ
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block"
              >
                <div className="relative aspect-[3/2] mb-4 overflow-hidden shadow-[0_0_7px_0_rgba(0,0,0,0.75)] group-hover:shadow-lg transition-shadow">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-red hover:text-red-dark transition-colors text-center">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-gray-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[38px] font-bold text-dark uppercase inline-block pb-3 border-b-[3px] border-black mb-8">
              За Konferencia.BG
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Професионалното техническо обезпечаване е неделима и много важна част от всяко
              събитие. Ние от Konferencia.bg предлагаме всичко необходимо за безпроблемното
              протичане на вашите конференции, конгреси, работни срещи, симпозиуми и др.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Feature columns on RED backgrounds */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`${feature.bg} text-white text-center py-[50px] px-5`}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center text-white">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold leading-snug max-w-xs mx-auto">
              {feature.title}
            </h3>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <Image
          src="/header3.jpg"
          alt="Конференция"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight uppercase">
            ИМАТЕ НУЖДА ОТ ПРОФЕСИОНАЛНО ОБЕЗПЕЧАВАНЕ НА ВАШЕТО СЪБИТИЕ
          </h2>
          <a
            href="tel:0886401306"
            className="inline-block mt-10 border-2 border-white text-white bg-transparent hover:bg-red hover:border-red font-bold px-10 py-4 transition-colors text-lg"
          >
            Обадете ни се
          </a>
        </div>
      </section>
    </>
  );
}
