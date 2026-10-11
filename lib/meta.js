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
      images: [{ url: "/logo.jpeg", width: 1080, height: 1080, alt: "Logo EM Elétrica" }],
    },
  };
}
