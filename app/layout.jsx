import "./globals.css";
import { Nav, Footer, WAFloat, CookieBanner, HashRedirect } from "@/components/site";
import { SITE_URL, SITE_NAME, COMPANY, CNPJ, EMAIL, PHONE_TEL, SERVICES } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EM Elétrica · Instalações e Manutenções Elétricas em Salvador e Região",
    template: "%s · EM Elétrica",
  },
  description:
    "EM Instalações e Manutenções Elétricas: 20 anos em obras elétricas residenciais, comerciais e industriais em Salvador e região. Equipe própria NR-10, padrão de entrada, SPDA, quadros, projetos e laudos com ART. Orçamento grátis.",
  applicationName: SITE_NAME,
  authors: [{ name: COMPANY }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: "/",
    title: "EM Elétrica · Instalações e Manutenções Elétricas",
    description: "20 anos em obras elétricas residenciais, comerciais e industriais em Salvador e região. Equipe própria NR-10. Orçamento grátis, Seg a Sáb 7h–17h.",
    images: [{ url: "/logo.jpeg", width: 1080, height: 1080, alt: "Logo EM Elétrica" }],
  },
  icons: { icon: "/favicon.svg" },
  other: { "geo.region": "BR-BA", "geo.placename": "Salvador" },
};

export const viewport = { themeColor: "#0a0a0a" };

// Dados da empresa no formato que o Google usa para buscas locais.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE_URL}/#empresa`,
  name: COMPANY,
  alternateName: SITE_NAME,
  image: `${SITE_URL}/logo.jpeg`,
  url: `${SITE_URL}/`,
  telephone: PHONE_TEL,
  email: EMAIL,
  taxID: CNPJ,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Salvador" },
    { "@type": "City", name: "Lauro de Freitas" },
    { "@type": "City", name: "Camaçari" },
    { "@type": "City", name: "Simões Filho" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Salvador", addressRegion: "BA", addressCountry: "BR" },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "17:00",
  }],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.h1, url: `${SITE_URL}/servicos/${s.slug}` },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Marca que o JavaScript está ativo antes da pintura: só então as
            animações de entrada (.reveal) escondem o conteúdo. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <div className="grid-bg" aria-hidden="true"></div>
        <Nav />
        <main id="conteudo" tabIndex={-1} className="page-fade">
          {children}
        </main>
        <Footer />
        <WAFloat />
        <CookieBanner />
        <HashRedirect />
      </body>
    </html>
  );
}
