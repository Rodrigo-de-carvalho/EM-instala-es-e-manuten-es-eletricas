import { Processo, FAQ, InlineCTA } from "@/components/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Como trabalhamos",
  description:
    "Do contato à entrega: diagnóstico com visita técnica gratuita, orçamento detalhado e execução com equipe própria NR-10 em Salvador e região.",
  path: "/processo",
});

export default function ProcessoPage() {
  return (
    <>
      <Processo headingLevel="h1" />
      <FAQ />
      <InlineCTA />
    </>
  );
}
