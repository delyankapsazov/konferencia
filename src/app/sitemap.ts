import type { MetadataRoute } from "next";

const BASE_URL = "https://konferencia.bg";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/услуги`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/озвучаване`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/симултанен-превод`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/мултимедия`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/дизайн-и-осветление`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/тур-гайд-система`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/запис-и-стрийминг`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/за-нас`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/клиенти`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/контакти`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
