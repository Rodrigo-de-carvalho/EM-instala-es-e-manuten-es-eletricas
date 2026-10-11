import { FAQ, InlineCTA } from "@/components/site";
import { FAQS } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Perguntas frequentes",
  description:
    "Dúvidas sobre orçamento, ART, laudos, projetos, pequenos serviços, regiões atendidas e horário da EM Elétrica em Salvador.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FAQ headingLevel="h1" />
      <InlineCTA />
    </>
  );
}
