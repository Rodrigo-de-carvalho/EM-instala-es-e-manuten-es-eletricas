import { PageHero, Diferenciais, Depoimentos, InlineCTA } from "@/components/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Sobre a EM Elétrica",
  description:
    "Conheça a EM Instalações e Manutenções Elétricas: 20 anos executando obras elétricas em Salvador e região com equipe própria certificada NR-10 e responsabilidade técnica documentada.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHero
        kicker="A EM"
        title={<><span className="accent">Engenharia elétrica</span> com mão de obra própria.</>}
        sub="20 anos executando obras elétricas em Salvador e região com equipe NR-10. Sem terceirizar mão de obra crítica, sem improviso, com responsabilidade técnica documentada."
      />
      <Diferenciais />
      <Depoimentos />
      <InlineCTA />
    </>
  );
}
