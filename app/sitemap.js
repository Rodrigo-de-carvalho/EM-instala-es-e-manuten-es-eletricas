import { SERVICES, SITE_URL } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date("2026-10-11");
  const pages = ["", "/servicos", "/obras", "/sobre", "/processo", "/faq", "/contato", "/privacidade"];
  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : p === "/servicos" ? 0.9 : p === "/privacidade" ? 0.2 : 0.6,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/servicos/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
