"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const services = [
  { name: "ОЗВУЧАВАНЕ", href: "/озвучаване" },
  { name: "СИМУЛТАНЕН ПРЕВОД", href: "/симултанен-превод" },
  { name: "МУЛТИМЕДИЯ", href: "/мултимедия" },
  { name: "ДИЗАЙН И ОСВЕТЛЕНИЕ", href: "/дизайн-и-осветление" },
  { name: "ТУР ГАЙД СИСТЕМА", href: "/тур-гайд-система" },
  { name: "ЗАПИС И СТРИЙМИНГ", href: "/запис-и-стрийминг" },
];

const serviceHrefs = new Set(services.map((s) => s.href));

const navLinks = [
  { name: "НАЧАЛО", href: "/" },
  { name: "ЗА НАС", href: "/за-нас" },
  { name: "УСЛУГИ", href: "/услуги", hasDropdown: true },
  { name: "КЛИЕНТИ", href: "/клиенти" },
  { name: "КОНТАКТИ", href: "/контакти" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white shadow-[0_0_7px_0_rgba(0,0,0,0.75)]"
    : isHome
      ? "bg-white/50"
      : "bg-white";

  const linkColor = "text-dark";
  const linkHover = "hover:text-red";
  const activeColor = "text-red";

  return (
    <>
      {/* Red top bar */}
      <div className="bg-red text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end h-8">
          <a
            href="https://www.facebook.com/konferencia.bg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}
        style={{ height: 74 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Конференция БГ"
                width={140}
                height={66}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav + language switcher + mobile burger */}
            <div className="flex items-center gap-2">
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 px-4 py-2 text-lg font-semibold tracking-wide transition-colors ${
                        pathname === "/услуги" || serviceHrefs.has(pathname)
                          ? activeColor
                          : `${linkColor} ${linkHover}`
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border-t-2 border-red py-2">
                        <Link
                          href="/услуги"
                          className="block px-4 py-2 text-sm font-semibold text-dark hover:bg-gray-50 hover:text-red transition-colors"
                        >
                          ВСИЧКИ УСЛУГИ
                        </Link>
                        <div className="border-t border-gray-100 my-1" />
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === s.href
                                ? "text-red font-semibold"
                                : "text-dark hover:bg-gray-50 hover:text-red"
                            }`}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-lg font-semibold tracking-wide transition-colors ${
                      pathname === link.href
                        ? activeColor
                        : `${linkColor} ${linkHover}`
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* Language switcher — UK flag */}
            <a
              href="https://conference-bg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-lg font-semibold tracking-wide text-dark hover:text-red transition-colors"
              aria-label="English version"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-auto" aria-hidden="true">
                <clipPath id="uk-clip">
                  <path d="M0 0v30h60V0z"/>
                </clipPath>
                <path d="M0 0v30h60V0z" fill="#012169"/>
                <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
                <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-clip)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
              </svg>
              <span>EN</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-dark"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-semibold text-dark hover:text-red transition-colors"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href="/услуги"
                          className="block px-3 py-2 text-sm text-dark/70 hover:text-red transition-colors"
                        >
                          ВСИЧКИ УСЛУГИ
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`block px-3 py-2 text-sm transition-colors ${
                              pathname === s.href ? "text-red" : "text-dark/70 hover:text-red"
                            }`}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 text-base font-semibold transition-colors ${
                      pathname === link.href ? "text-red" : "text-dark hover:text-red"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
