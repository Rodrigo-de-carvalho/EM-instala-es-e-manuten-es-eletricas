import { ServicesGrid, InlineCTA } from "@/components/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Serviços elétricos em Salvador",
  description:
    "Todos os serviços da EM Elétrica em Salvador e região: instalações residenciais e comerciais, quadros, padrão de entrada, SPDA, manutenção, laudos e ART, projetos, ar-condicionado, câmeras e hidráulica.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <ServicesGrid headingLevel="h1" />
      <InlineCTA />
    </>
  );
}
