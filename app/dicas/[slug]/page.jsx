import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, InlineCTA } from "@/components/site";
import { DICAS, getDica } from "@/lib/dicas";
import { getService, SITE_URL, COMPANY } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() {
  return DICAS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = getDica(slug);
  if (!d) return {};
  return pageMeta({ title: d.metaTitle, description: d.description, path: `/dicas/${d.slug}` });
}

const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

export default async function DicaPage({ params }) {
  const { slug } = await params;
  const d = getDica(slug);
  if (!d) notFound();
  const service = getService(d.service);
  const others = DICAS.filter((x) => x.slug !== d.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.title,
    description: d.description,
    datePublished: d.date,
    dateModified: d.date,
    inLanguage: "pt-BR",
    mainEntityOfPage: `${SITE_URL}/dicas/${d.slug}`,
    author: { "@type": "Organization", name: COMPANY, url: `${SITE_URL}/` },
    publisher: { "@id": `${SITE_URL}/#empresa` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="dica">
        <div className="container dica-container">
          <nav aria-label="Você está em">
            <ol className="crumbs">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/dicas">Dicas</Link></li>
            </ol>
          </nav>
          <h1 className="dica-h1">{d.title}</h1>
          <div className="dica-meta">{fmt(d.date)} · {d.minutes} min de leitura · Equipe EM Elétrica</div>
          <div className="dica-body">
            {d.body.map((b, i) =>
              b.h2 ? <h2 key={i}>{b.h2}</h2>
              : b.list ? <ul key={i}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
              : <p key={i}>{b.p}</p>
            )}
          </div>
          {service && (
            <aside className="dica-service">
              <div className="svc-icon"><Icon name={service.icon} size={30} stroke={1.4} /></div>
              <div>
                <div className="eyebrow">Serviço relacionado</div>
                <Link href={`/servicos/${service.slug}`} className="dica-service-link">
                  {service.h1} <Icon name="arrow" size={14} />
                </Link>
              </div>
            </aside>
          )}
          <p className="dica-disclaimer">
            Este conteúdo é informativo. Serviços em instalações elétricas devem ser feitos por
            profissional habilitado, com o circuito desligado e os equipamentos de proteção adequados.
          </p>
          {others.length > 0 && (
            <div className="dica-others">
              <h2>Leia também</h2>
              <ul>
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/dicas/${o.slug}`}>{o.title}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      <InlineCTA title="Precisa de uma avaliação?" />
    </>
  );
}
