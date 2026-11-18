import { Hero, Ticker, HomeServicesTeaser, Depoimentos, HomeCTA } from "@/components/site";
import { pageMeta } from "@/lib/meta";
import { SITE_URL, SITE_NAME, COMPANY } from "@/lib/site";

export const metadata = pageMeta({
  title: "EM Elétrica · Eletricista em Salvador e Região",
  absoluteTitle: true,
  description:
    "Instalações e manutenções elétricas em Salvador e região: residencial, comercial e industrial, quadros, padrão de entrada, SPDA, ar-condicionado, câmeras e hidráulica. Equipe própria NR-10. Orçamento grátis.",
  path: "/",
});

// Diz ao Google o nome do site; sem isso, ele mostra "Vercel" no resultado.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: [COMPANY, "EM Instalações"],
  url: `${SITE_URL}/`,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Hero />
      <Ticker />
      <HomeServicesTeaser />
      <Depoimentos />
      <HomeCTA />
    </>
  );
}
