import { Obras, InlineCTA } from "@/components/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Obras realizadas",
  description:
    "Fotos reais de obras da EM Elétrica em Salvador e região: quadros e painéis, iluminação, eletrodutos, eletrocalhas, racks e instalações residenciais e comerciais.",
  path: "/obras",
});

export default function ObrasPage() {
  return (
    <>
      <Obras headingLevel="h1" />
      <InlineCTA />
    </>
  );
}
