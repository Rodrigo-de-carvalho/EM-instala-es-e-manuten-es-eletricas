import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, FAQ, InlineCTA } from "@/components/site";
import { SERVICES, getService, SITE_URL, HOURS, waLink } from "@/lib/site";
import { pageMeta } from "@/lib/meta";

// Uma página estática por serviço, gerada no build.
export const dynamicParams = false;
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/servicos/${s.slug}` });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const includes = s.includes || s.list || [];
  const waText = `Olá! Vim pelo site e gostaria de um orçamento de ${s.title.toLowerCase()}.`;
  const idx = SERVICES.indexOf(s);
  const related = [1, 2, 3].map((k) => SERVICES[(idx + k) % SERVICES.length]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.title,
      description: s.metaDescription,
      url: `${SITE_URL}/servicos/${s.slug}`,
      areaServed: { "@type": "City", name: "Salvador" },
      provider: { "@id": `${SITE_URL}/#empresa` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/servicos` },
        { "@type": "ListItem", position: 3, name: s.title, item: `${SITE_URL}/servicos/${s.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="svc-hero">
        <div className="container svc-hero-grid">
          <div>
            <nav aria-label="Você está em">
              <ol className="crumbs">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/servicos">Serviços</Link></li>
                <li aria-current="page">{s.title}</li>
              </ol>
            </nav>
            <div className="eyebrow">Serviço · Salvador e região</div>
            <h1>{s.h1}</h1>
            <p className="svc-hero-intro">{s.intro}</p>
            <div className="svc-hero-cta">
              <a className="btn" href={waLink(waText)} target="_blank" rel="noopener noreferrer">
                <Icon name="wa" size={16} /> Pedir orçamento no WhatsApp
              </a>
              <Link className="btn ghost" href="/contato">
                Formulário de orçamento <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>

          {s.img ? (
            <div className="svc-hero-media">
              <img src={`/img/obras/${s.img}.jpg`} alt={s.imgAlt} style={{ objectPosition: s.imgPos }} />
            </div>
          ) : (
            <aside className="svc-hero-panel" aria-label="Resumo do atendimento">
              <div className="svc-icon"><Icon name={s.icon} size={44} stroke={1.3} /></div>
              <dl>
                <div><dt>Atendimento</dt><dd>{HOURS}</dd></div>
                <div><dt>Região</dt><dd>Salvador, Lauro de Freitas, Camaçari e Simões Filho</dd></div>
                <div><dt>Visita técnica</dt><dd>Gratuita e sem compromisso</dd></div>
                <div><dt>Equipe</dt><dd>Própria, uniformizada e com NR-10</dd></div>
              </dl>
              <div className="svc-tags">
                {s.tags.map((t) => <span key={t} className="svc-tag">{t}</span>)}
              </div>
            </aside>
          )}
        </div>
      </section>

      {includes.length > 0 && (
        <section className="svc-includes-wrap">
          <div className="container">
            <h2>O que fazemos</h2>
            <ul className="svc-includes">
              {includes.map((item) => (
                <li key={item}><Icon name="check" size={18} /> {item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {s.faqs?.length > 0 && (
        <FAQ
          items={s.faqs}
          num=""
          title={<>Dúvidas sobre <span className="accent">{s.title.toLowerCase()}</span></>}
        />
      )}

      <section className="svc-related">
        <div className="container">
          <h2>Outros serviços</h2>
          <div className="home-teaser">
            {related.map((r) => (
              <Link className="home-teaser-card" key={r.slug} href={`/servicos/${r.slug}`}>
                <div className="ht-icon"><Icon name={r.icon} size={26} stroke={1.5} /></div>
                <div className="ht-title">{r.title}</div>
                <div className="ht-desc">{r.teaser}</div>
                <div className="ht-link">Ver mais <Icon name="arrow" size={12} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA title={`Orçamento de ${s.title.toLowerCase()}?`} waText={waText} />
    </>
  );
}
