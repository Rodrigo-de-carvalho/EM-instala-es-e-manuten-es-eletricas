import { SITE_NAME } from "./site";

// Metadados de uma página: título, descrição, canonical e prévia de
// compartilhamento (WhatsApp, Facebook). O openGraph do layout não é
// herdado campo a campo, então cada página monta o seu completo.
export function pageMeta({ title, description, path, absoluteTitle = false }) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url: path,
      title: absoluteTitle ? title : `${title} · ${SITE_NAME}`,
      description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EM Elétrica: eletricista em Salvador e região" }],
    },
    twitter: { card: "summary_large_image" },
  };
}
