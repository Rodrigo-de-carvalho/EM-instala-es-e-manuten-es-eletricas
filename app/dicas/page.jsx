import Link from "next/link";
import { PageHero, Icon, InlineCTA } from "@/components/site";
import { DICAS } from "@/lib/dicas";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Dicas de elétrica",
  description:
    "Dicas da EM Elétrica sobre fiação, quadro de energia, DR, DPS e disjuntores: como identificar problemas e quando chamar um eletricista em Salvador.",
  path: "/dicas",
});

const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

export default function DicasPage() {
  return (
    <>
      <PageHero
        kicker="Dicas"
        title={<>Elétrica <span className="accent">sem mistério.</span></>}
        sub="Respostas diretas para as dúvidas mais comuns sobre a instalação elétrica da sua casa ou empresa."
      />
      <section className="dicas-list-wrap">
        <div className="container">
          <ul className="dicas-list">
            {DICAS.map((d) => (
              <li key={d.slug}>
                <Link className="dica-card" href={`/dicas/${d.slug}`}>
                  <div className="dica-meta">{fmt(d.date)} · {d.minutes} min de leitura</div>
                  <h2 className="dica-title">{d.title}</h2>
                  <p className="dica-desc">{d.description}</p>
                  <span className="ht-link">Ler <Icon name="arrow" size={12} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <InlineCTA title="Ficou com alguma dúvida?" />
    </>
  );
}
