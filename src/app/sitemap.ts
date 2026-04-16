import type { MetadataRoute } from "next";

const BASE_URL = "https://konferencia.bg";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/uslugi`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/uslugi/ozvuchavane`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/uslugi/simultanen-prevod`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/uslugi/multimediya`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/uslugi/dizain-i-osvetlenie`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/uslugi/turgid-sistema`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/uslugi/zapis-i-striyming`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/za-nas`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/klienti`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/kontakti`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
