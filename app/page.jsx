import { Hero, Ticker, HomeServicesTeaser, Depoimentos, HomeCTA } from "@/components/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "EM Elétrica · Eletricista e Instalações Elétricas em Salvador e Região",
  absoluteTitle: true,
  description:
    "Instalações e manutenções elétricas em Salvador e região: residencial, comercial e industrial, quadros, padrão de entrada, SPDA, ar-condicionado, câmeras e hidráulica. Equipe própria NR-10. Orçamento grátis.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <HomeServicesTeaser />
      <Depoimentos />
      <HomeCTA />
    </>
  );
}
