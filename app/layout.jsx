import "./globals.css";
import { Archivo, Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import { Nav, Footer, WAFloat, CookieBanner, HashRedirect } from "@/components/site";
import { SITE_URL, SITE_NAME, COMPANY, CNPJ, EMAIL, PHONE_TEL, SERVICES } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EM Elétrica · Eletricista em Salvador e Região",
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
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EM Elétrica: eletricista em Salvador e região" }],
  },
  icons: { icon: "/favicon.svg" },
  other: { "geo.region": "BR-BA", "geo.placename": "Salvador" },
};

export const viewport = { themeColor: "#0a0a0a" };

// Fontes servidas pelo próprio site (o Next.js baixa no build): o celular não
// precisa abrir conexão com o Google Fonts antes de mostrar o título. Só a
// fonte do título (o maior texto da tela) é pré-carregada; as outras não
// disputam a conexão com ela.
const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--f-display", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--f-archivo", display: "swap", preload: false });
const inter = Inter({ subsets: ["latin"], variable: "--f-inter", display: "swap", preload: false });
const mono = JetBrains_Mono({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--f-mono", display: "swap", preload: false });
const fontVars = [display.variable, archivo.variable, inter.variable, mono.variable].join(" ");

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
    <html lang="pt-BR" className={fontVars}>
      <head>
        {/* Marca que o JavaScript está ativo antes da pintura: só então as
            animações de entrada (.reveal) escondem o conteúdo. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <div className="grid-bg" aria-hidden="true"></div>
        <Nav />
        <main id="conteudo" tabIndex={-1}>
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
