import { Contato } from "@/components/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Contato e orçamento",
  description:
    "Peça seu orçamento grátis de serviços elétricos em Salvador e região. WhatsApp (71) 9 9135-8822, de segunda a sábado, das 7h às 17h.",
  path: "/contato",
});

export default function ContatoPage() {
  return <Contato />;
}
