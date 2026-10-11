"use client";

// Componentes do site. Vieram do antigo main.jsx (React no navegador via
// Babel); agora o Next.js gera o HTML de cada página no build, e a navegação
// usa endereços de verdade (/servicos, /contato…) em vez de #hash.

import { useEffect, useRef, useState, Children, cloneElement } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  NAV, SERVICES, OBRAS, FAQS, EMAIL, PHONE_DISPLAY, PHONE_TEL, CNPJ, waLink,
} from "@/lib/site";

/* ============================================================
   Peças compartilhadas: ícones, medidor, linhas de circuito
   ============================================================ */

export const Icon = ({ name, size = 22, stroke = 1.6 }) => {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
    "aria-hidden": "true", focusable: "false",
  };
  const paths = {
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
    plug: (<g><path d="M9 2v6" /><path d="M15 2v6" /><path d="M7 8h10v4a5 5 0 0 1-10 0V8z" /><path d="M12 17v5" /></g>),
    panel: (<g><rect x="3" y="3" width="18" height="18" /><path d="M3 8h18" /><path d="M8 12h2" /><path d="M14 12h2" /><path d="M8 16h2" /><path d="M14 16h2" /></g>),
    house: (<g><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></g>),
    factory: (<g><path d="M3 21V10l6 4V10l6 4V7l6 3v11z" /><path d="M9 21v-4" /><path d="M15 21v-4" /></g>),
    spda: (<g><path d="M12 2v6" /><path d="M9 8h6" /><path d="M12 8v6l-3 4h6l-3-4" /><path d="M12 22h0" /></g>),
    wrench: (<g><path d="M14 6a4 4 0 0 0-4 4c0 .5.1 1 .2 1.4L3 18.6 5.4 21l7.2-7.2c.4.1.9.2 1.4.2a4 4 0 0 0 4-4c0-.7-.2-1.3-.5-1.9L15 10.5 13.5 9l2.4-2.5C15.3 6.2 14.7 6 14 6z" /></g>),
    shield: <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />,
    mail: (<g><rect x="2" y="4" width="20" height="16" /><path d="m22 4-10 9L2 4" /></g>),
    arrow: (<g><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></g>),
    plus: (<g><path d="M12 5v14" /><path d="M5 12h14" /></g>),
    check: <path d="M20 6 9 17l-5-5" />,
    wa: (<g><path d="M21 12a9 9 0 1 1-3.5-7l3.5-1-1 3.5A9 9 0 0 1 21 12z" /><path d="M8 10c0 4 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2-2 1z" /></g>),
    eye: (<g><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></g>),
    ac: (<g><rect x="1" y="4" width="22" height="9" rx="2" /><path d="M8 13v4M12 13v5M16 13v4" /><path d="M5 17h14" /></g>),
    cam: (<g><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></g>),
    drop: <path d="M12 2C7 9 5 13 5 16a7 7 0 0 0 14 0c0-3-2-7-7-14z" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const VoltageGauge = () => {
  const [val, setVal] = useState(217);
  const [bars, setBars] = useState(14);
  useEffect(() => {
    const id = setInterval(() => {
      setVal(215 + Math.floor(Math.random() * 10));
      setBars(12 + Math.floor(Math.random() * 6));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-gauge" aria-hidden="true">
      <div className="gauge-head">
        <span>● Monitor</span><span>L1·N · 60Hz</span>
      </div>
      <div className="gauge-val">{val}</div>
      <div className="gauge-unit">Volts AC · Estável</div>
      <div className="gauge-bars">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={i < bars ? "on" : ""}></span>
        ))}
      </div>
      <div className="gauge-foot">
        <span>MIN 208</span><span>MAX 232</span>
      </div>
    </div>
  );
};

const CircuitLines = () => (
  <div className="hero-circuit" aria-hidden="true">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad1" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 60 L300 60 L320 40 L600 40 L620 60 L900 60 L920 40 L1200 40 L1220 60 L1440 60"
            stroke="var(--line-strong)" strokeWidth="1.5" fill="none" />
      <path d="M0 60 L300 60 L320 40 L600 40 L620 60 L900 60 L920 40 L1200 40 L1220 60 L1440 60"
            stroke="url(#grad1)" strokeWidth="2" fill="none"
            strokeDasharray="60 1440" strokeDashoffset="0">
        <animate attributeName="stroke-dashoffset" from="0" to="-1500" dur="6s" repeatCount="indefinite" />
      </path>
      <circle cx="320" cy="40" r="3" fill="var(--accent)" />
      <circle cx="620" cy="60" r="3" fill="var(--accent)" />
      <circle cx="920" cy="40" r="3" fill="var(--accent)" />
      <circle cx="1220" cy="60" r="3" fill="var(--accent)" />
    </svg>
  </div>
);

// O HTML sai do servidor com o valor final (bom para o Google e para quem
// está sem JavaScript); a contagem a partir de 0 só começa ao entrar na tela.
const CountUp = ({ value, duration = 1300 }) => {
  const target = parseFloat(value);
  const isNum = !isNaN(target);
  const [n, setN] = useState(isNum ? target : value);
  const ref = useRef(null);
  useEffect(() => {
    if (!isNum) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <span ref={ref}>{n}</span>;
};

// Clona o filho único para manter os seletores da grade (.services > .span-6).
// O CSS só esconde .reveal quando <html> tem a classe "js" (posta por um
// script no <head>), então sem JavaScript o conteúdo continua visível.
export const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const child = Children.only(children);
  return cloneElement(child, {
    ref,
    className: (child.props.className || "") + " reveal" + (seen ? " in" : ""),
    style: { ...(child.props.style || {}), transitionDelay: delay + "ms" },
  });
};

export const SectionHead = ({ num, label, title, as: Tag = "h2", children }) => (
  <div className="section-head container">
    <div>
      <div className="sh-num">{num}</div>
      <div className="sh-label">{label}</div>
    </div>
    <div>
      <Tag className="sh-title">{title}</Tag>
      {children && <p>{children}</p>}
    </div>
  </div>
);

export const PageHero = ({ kicker, title, sub }) => (
  <section className="page-hero">
    <div className="container">
      <div className="eyebrow">{kicker}</div>
      <h1 className="page-hero-title">{title}</h1>
      {sub && <p className="page-hero-sub">{sub}</p>}
    </div>
  </section>
);

/* ============================================================
   Estrutura: navegação, rodapé, WhatsApp, cookies
   ============================================================ */

const isActive = (pathname, href) => pathname === href || pathname.startsWith(href + "/");

export const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="nav" aria-label="Principal">
      <div className="container nav-inner">
        <Link className="nav-logo" href="/">
          <img src="/logo-nav.jpg" alt="" className="nav-logo-img" width="72" height="72" />
          <span>
            EM Elétrica
            <br />
            <small>CREA · NR-10 · Seg–Sáb 7h–17h</small>
          </span>
        </Link>

        <div className="nav-links">
          {NAV.map((p) => (
            <Link key={p.href} href={p.href}
              className={"nav-link" + (isActive(pathname, p.href) ? " active" : "")}
              aria-current={isActive(pathname, p.href) ? "page" : undefined}
            >{p.label}</Link>
          ))}
        </div>

        <Link className="nav-cta" href="/contato">
          Orçamento grátis <Icon name="arrow" size={14} />
        </Link>

        <button
          type="button"
          className={"nav-hamburger" + (open ? " is-open" : "")}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="nav-drawer"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-drawer" id="nav-drawer">
          {[...NAV, { href: "/contato", label: "Contato" }].map((p) => (
            <Link key={p.href} href={p.href}
              className={"nav-drawer-link" + (isActive(pathname, p.href) ? " active" : "")}
            >
              <span>{p.label}</span>
              <Icon name="arrow" size={14} />
            </Link>
          ))}
          <div className="nav-drawer-footer">
            <Link className="nav-drawer-cta" href="/contato">
              Orçamento grátis <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-big" aria-hidden="true">EM<span className="accent">.</span></div>
      <div className="footer-cols">
        <div className="footer-col">
          <h2 className="footer-h">Sobre</h2>
          <p style={{ color: "var(--text-dim)", fontSize: 14, margin: 0, maxWidth: 360, lineHeight: 1.6 }}>
            EM Instalações e Manutenções Elétricas. 20 anos executando obras elétricas
            em Salvador e região metropolitana, com equipe técnica certificada NR-10.
            CNPJ {CNPJ}.
          </p>
        </div>
        <div className="footer-col">
          <h2 className="footer-h">Serviços</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/servicos/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h2 className="footer-h">Empresa</h2>
          <ul>
            <li><Link href="/sobre">A EM</Link></li>
            <li><Link href="/obras">Obras</Link></li>
            <li><Link href="/processo">Processo</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/dicas">Dicas</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h2 className="footer-h">Contato</h2>
          <ul>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`}>E-mail</a></li>
            <li><Link href="/contato">Orçamento</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <div>© {new Date().getFullYear()} EM Elétrica · NR-10 · CNPJ {CNPJ}</div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <span>Salvador e região · Elétrica · Manutenção</span>
          <Link href="/privacidade" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: 13 }}>Política de Privacidade</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const WAFloat = () => (
  <a href={waLink()} className="wa-float" aria-label="Falar no WhatsApp" target="_blank" rel="noopener noreferrer">
    <Icon name="wa" size={26} stroke={1.8} />
  </a>
);

export const CookieBanner = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    try { setShown(!localStorage.getItem("em-cookie-ok")); } catch { setShown(true); }
  }, []);
  if (!shown) return null;
  const dismiss = () => {
    try { localStorage.setItem("em-cookie-ok", "1"); } catch {}
    setShown(false);
  };
  return (
    <div className="cookie-banner" role="region" aria-label="Aviso de privacidade">
      <p>Este site coleta dados apenas quando você preenche o formulário de contato. Veja nossa{" "}
        <Link href="/privacidade" className="cookie-link" onClick={dismiss}>Política de Privacidade</Link>.
      </p>
      <button type="button" className="cookie-ok" onClick={dismiss}>Entendi</button>
    </div>
  );
};

// Endereços antigos usavam #hash (ex.: /#servicos). Quem chega por um link
// antigo é levado para a página nova equivalente.
const OLD_HASHES = ["servicos", "sobre", "processo", "obras", "faq", "contato", "privacidade"];
export const HashRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    const h = window.location.hash.replace(/^#\/?/, "");
    if (OLD_HASHES.includes(h)) router.replace("/" + h);
  }, [router]);
  return null;
};

/* ============================================================
   Seções da página inicial
   ============================================================ */

export const Hero = () => (
  <section className="hero" id="top">
    <div className="container">
      <div className="hero-tag">
        <span className="pulse"></span>
        Salvador e região · Seg a Sáb · 7h às 17h
      </div>
      <h1 className="display hero-title">
        <span className="sr-only">EM Elétrica: instalações e manutenções elétricas em Salvador. </span>
        <span aria-hidden="true">
          Energia<br />
          <span className="accent">sob controle.</span><br />
          <span className="stroke">Obra entregue.</span>
        </span>
      </h1>
      <p className="hero-sub">
        Instalações, manutenções e obras elétricas em Salvador e região, executadas por
        equipe técnica certificada NR-10. Da entrada de energia ao acabamento: projeto,
        padrão de concessionária, quadros, automação e laudos com ART.
      </p>
      <div className="hero-cta-row">
        <Link className="btn" href="/contato">
          Pedir orçamento <Icon name="arrow" size={16} />
        </Link>
        <a href={waLink()} className="btn ghost" target="_blank" rel="noopener noreferrer">
          <Icon name="wa" size={16} /> WhatsApp direto
        </a>
      </div>
      <div className="hero-badges">
        {["CREA", "NR-10", "ART", "20 anos", "Equipe própria"].map((b) => (
          <span className="hero-badge" key={b}><Icon name="check" size={13} /> {b}</span>
        ))}
      </div>
    </div>
    <VoltageGauge />
    <CircuitLines />
  </section>
);

export const Ticker = () => {
  const items = [
    "★ Obras residenciais", "★ Comercial · Industrial · Saúde", "★ Padrão de entrada",
    "★ SPDA / Aterramento", "★ Manutenção elétrica", "★ Laudos com ART", "★ Projetos elétricos",
    "★ Subestações", "★ Pequenos serviços", "★ Quadros de distribuição",
    "★ Ar-condicionado · Split · VRF", "★ Câmeras de segurança · CFTV", "★ Hidráulica · Instalações e Reparos",
  ];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
};

export const HomeServicesTeaser = () => (
  <section>
    <SectionHead
      num=""
      label="O que fazemos"
      title={<>Da <span className="accent">tomada</span> à <span className="accent">subestação.</span></>}
    >
      Equipe própria e laudo técnico em toda obra. Cobrimos desde o reparo
      emergencial até projetos completos com ART.
    </SectionHead>
    <div className="container">
      <div className="home-teaser">
        {SERVICES.map((s) => (
          <Link className="home-teaser-card" key={s.slug} href={`/servicos/${s.slug}`}>
            <div className="ht-icon"><Icon name={s.icon} size={26} stroke={1.5} /></div>
            <div className="ht-title">{s.title}</div>
            <div className="ht-desc">{s.teaser}</div>
            <div className="ht-link">Ver mais <Icon name="arrow" size={12} /></div>
          </Link>
        ))}
      </div>
      <div className="home-teaser-cta">
        <Link className="btn ghost" href="/servicos">
          Ver todos os serviços <Icon name="arrow" size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export const HomeCTA = () => (
  <section className="home-cta">
    <div className="container">
      <div className="home-cta-inner">
        <div className="home-cta-badge">
          <span className="home-cta-dot" />
          Visita técnica gratuita · Seg a Sáb 7h–17h
        </div>
        <h2 className="display home-cta-title">
          Sua obra<br />energizada.
        </h2>
        <p className="home-cta-sub">
          Orçamento detalhado das 7h às 17h, sem compromisso. Equipe própria,
          certificada NR-10, com responsabilidade técnica em cada obra.
        </p>
        <div className="home-cta-btns">
          <Link className="home-cta-btn-primary" href="/contato">
            Pedir orçamento <Icon name="arrow" size={16} />
          </Link>
          <a href={waLink()} className="home-cta-btn-wa" target="_blank" rel="noopener noreferrer">
            <Icon name="wa" size={18} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export const InlineCTA = ({ title = "Vamos calcular sua obra?", waText }) => (
  <section className="inline-cta">
    <div className="container">
      <div className="inline-cta-inner">
        <div className="inline-cta-text">
          <div className="eyebrow">Próximo passo</div>
          <h2 className="inline-cta-title">{title}</h2>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn" href="/contato">
            Pedir orçamento <Icon name="arrow" size={16} />
          </Link>
          <a href={waLink(waText)} className="btn ghost" target="_blank" rel="noopener noreferrer">
            <Icon name="wa" size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   Páginas internas
   ============================================================ */

export const ServicesGrid = ({ headingLevel = "h1" }) => (
  <section id="servicos">
    <SectionHead
      as={headingLevel}
      num="01"
      label="O que fazemos"
      title={<>Serviços elétricos em <span className="accent">Salvador</span>: fio, força, ar e imagem.</>}
    >
      Atendemos do reparo emergencial à obra completa: elétrica, ar-condicionado,
      câmeras de segurança e hidráulica. Equipe própria, projeto técnico e
      responsabilidade documentada.
    </SectionHead>
    <div className="container">
      <div className="services">
        {SERVICES.map((s) => (
          <Reveal key={s.slug} delay={(parseInt(s.n, 10) - 1) * 60}>
            <div className={`service span-${s.span} ${s.featured ? "featured" : ""}`}>
              {s.cardPhoto && (
                <div className="svc-photo">
                  <img src={`/img/obras/${s.img}.jpg`} alt={s.imgAlt} loading="lazy" style={{ objectPosition: s.imgPos }} />
                </div>
              )}
              <div className="svc-top">
                <div className="svc-num">{s.n} / {String(SERVICES.length).padStart(2, "0")}</div>
                <div className="svc-icon"><Icon name={s.icon} size={32} stroke={1.4} /></div>
              </div>
              <div>
                <h2 className="svc-title">
                  <Link href={`/servicos/${s.slug}`} className="svc-link">{s.title}</Link>
                </h2>
                <p className="svc-desc">{s.desc}</p>
                {s.list && (
                  <ul className="svc-list">
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                <div className="svc-tags">
                  {s.tags.map((t) => <span key={t} className="svc-tag">{t}</span>)}
                </div>
                <div className="svc-more">Ver detalhes <Icon name="arrow" size={12} /></div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Diferenciais = () => {
  const items = [
    { n: "20", unit: "anos", title: "Mercado", desc: "Duas décadas executando obras elétricas com a mesma equipe técnica." },
    { n: "100", unit: "%", title: "Equipe NR-10", desc: "Todos os eletricistas com curso NR-10 atualizado e EPI completo em obra." },
    { n: "7", unit: "–17h", title: "Seg a Sáb", desc: "Atendimento de segunda a sábado, das 7h às 17h, para orçamentos, visitas técnicas e execução de obras." },
  ];
  return (
    <section id="diferenciais">
      <SectionHead
        num="02"
        label="Por que a EM"
        title={<><span className="accent">Seguro, no prazo,</span> sem improviso.</>}
      >
        Obras com checklist técnico, equipe própria e responsabilidade documentada
        sempre que necessário. Nada de gambiarra e sem terceirizar mão de obra crítica.
      </SectionHead>
      <div className="container">
        <div className="diff-grid">
          {items.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <div className="diff">
                <div className="diff-num"><CountUp value={d.n} /><small>{d.unit}</small></div>
                <div className="diff-title">{d.title}</div>
                <div className="diff-desc">{d.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Processo = ({ headingLevel = "h2" }) => {
  const steps = [
    { n: "01", icon: "phone", title: "Diagnóstico", desc: "Visita técnica ou avaliação por foto/vídeo. Levantamento de cargas, situação atual e necessidades." },
    { n: "02", icon: "panel", title: "Orçamento", desc: "Proposta detalhada com materiais, mão de obra, prazo e cronograma, sem letras miúdas." },
    { n: "03", icon: "wrench", title: "Execução", desc: "Equipe uniformizada, EPI completo, obra limpa. Acompanhamento diário e fotos do antes e depois." },
  ];
  return (
    <section id="processo">
      <SectionHead
        as={headingLevel}
        num="03"
        label="Como trabalhamos"
        title={<>Um fluxo <span className="accent">simples</span> do contato à entrega.</>}
      />
      <div className="container">
        <div className="process">
          <div className="process-steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="step">
                  <div className="step-head">
                    <div className="step-num">{s.n}</div>
                    <div className="step-icon"><Icon name={s.icon} size={18} /></div>
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Obras = ({ items = OBRAS, headingLevel = "h1" }) => (
  <section id="obras">
    <SectionHead
      as={headingLevel}
      num="04"
      label="Obras realizadas"
      title={<>Obras <span className="accent">de verdade,</span> entregues no prazo.</>}
    >
      Registros reais de obra: quadros e painéis, iluminação, infraestrutura
      elétrica e instalações residenciais e comerciais em Salvador e região.
    </SectionHead>
    <div className="container">
      <div className="portfolio">
        {items.map((p, i) => (
          <Reveal key={p.img} delay={i * 60}>
            <figure className={`proj size-${p.size}`}>
              <img className="proj-img" src={`/img/obras/${p.img}.jpg`} alt={`${p.title}: ${p.meta}`} loading="lazy" style={{ objectPosition: p.pos }} />
              <figcaption className="proj-info">
                <div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-meta">{p.meta}</div>
                </div>
                <div className="proj-tag">{p.tag}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Depoimentos = () => {
  const items = [
    { q: "Refizeram toda a parte elétrica da nossa fábrica em finais de semana, sem parar a produção. Profissional do começo ao fim.", who: "Carlos M.", where: "Indústria · 800m²", stars: 5 },
    { q: "Cheguei em casa com o disjuntor disparando, eles vieram em 40 minutos. Em duas horas tudo resolvido e com laudo do que era.", who: "Patrícia R.", where: "Residencial · Emergência", stars: 5 },
    { q: "Contratamos a manutenção preventiva mensal. Em um ano, zero paradas não programadas. Vale cada centavo.", who: "Roberto S.", where: "Rede de lojas · 6 unidades", stars: 5 },
  ];
  return (
    <section>
      <SectionHead
        num="05"
        label="O que dizem"
        title={<><span className="accent">Clientes</span> que voltam a chamar.</>}
      />
      <div className="container">
        <div className="testis">
          {items.map((t, i) => (
            <Reveal key={t.who} delay={i * 80}>
              <div className="testi">
                <div className="testi-quote">{t.q}</div>
                <div className="testi-foot">
                  <div>
                    <div className="testi-who">{t.who}</div>
                    <div className="testi-where">{t.where}</div>
                  </div>
                  <div className="testi-stars" aria-label={`${t.stars} de 5 estrelas`}>{"★".repeat(t.stars)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = ({ items = FAQS, headingLevel = "h2", num = "06", title }) => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <SectionHead
        as={headingLevel}
        num={num}
        label="Perguntas frequentes"
        title={title || <>Tirando as <span className="accent">dúvidas</span> antes da obra.</>}
      />
      <div className="container">
        <div className="faq">
          {items.map((it, i) => (
            <div key={it.q} className={"faq-item" + (open === i ? " open" : "")}>
              <h3 className="faq-h">
                <button type="button" className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="faq-q-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-q-text">{it.q}</span>
                  <span className="faq-q-icon"><Icon name="plus" size={14} /></span>
                </button>
              </h3>
              <div className="faq-a">
                <div className="faq-a-inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   Contato
   ============================================================ */

const TIPOS = [
  "Instalação residencial", "Instalação comercial", "Instalação industrial",
  "Instalação em clínica ou hospital", "Padrão de entrada / concessionária",
  "Quadro de distribuição (QDC / QGBT)", "SPDA / aterramento", "Manutenção preventiva ou corretiva",
  "Lustre / luminária", "Ventilador de teto", "Chuveiro elétrico", "Ponto de ar-condicionado",
  "Tomadas e interruptores", "Campainha / interfone", "Sensor de presença", "Disjuntor / DPS",
  "Projeto elétrico", "Laudo / ART", "Ar-condicionado · Instalação", "Ar-condicionado · Manutenção / limpeza",
  "Câmeras de segurança · Instalação", "Câmeras de segurança · Configuração",
  "Hidráulica · Instalação geral", "Hidráulica · Troca de torneiras e registros",
  "Hidráulica · Troca de acabamento", "Hidráulica · Bomba pressurizadora",
  "Hidráulica · Reparo de vazamento", "Hidráulica · Desentupimento", "Outro",
];

export const Contato = () => {
  const [form, setForm] = useState({ nome: "", tel: "", email: "", tipo: "", msg: "", aceito: false });
  const [error, setError] = useState("");
  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // O pedido segue pelo WhatsApp, que chega na hora e funciona em qualquer
  // celular (o envio por e-mail dependia de um app de e-mail configurado).
  const submit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.tel) { setError("Preencha nome e telefone para continuar."); return; }
    if (!form.aceito) { setError("É preciso aceitar a Política de Privacidade para continuar."); return; }
    setError("");
    const text =
      `Olá! Vim pelo site e gostaria de um orçamento.\n\n` +
      `Nome: ${form.nome}\nTelefone/WhatsApp: ${form.tel}\nE-mail: ${form.email}\n` +
      `Tipo de serviço: ${form.tipo || "Não informado"}\n\n${form.msg}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato">
      <SectionHead
        as="h1"
        num="07"
        label="Fale com a EM"
        title={<>Pronto para <span className="accent">energizar</span> sua obra?</>}
      >
        Conte rápido o que você precisa. Respondemos no mesmo dia e marcamos a
        visita técnica gratuita em Salvador e região.
      </SectionHead>
      <div className="container">
        <div className="contact">
          <div className="contact-info">
            <h2 className="contact-info-title">Fale<br />direto<br />com a gente.</h2>
            <div className="contact-channel">
              <div className="contact-channel-icon"><Icon name="wa" size={18} /></div>
              <div>
                <div className="contact-channel-label">WhatsApp · Seg a Sáb 7h–17h</div>
                <a href={waLink()} className="contact-channel-value" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="contact-channel">
              <div className="contact-channel-icon"><Icon name="phone" size={18} /></div>
              <div>
                <div className="contact-channel-label">Telefone</div>
                <a href={`tel:${PHONE_TEL}`} className="contact-channel-value" style={{ color: "inherit", textDecoration: "none" }}>{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="contact-channel">
              <div className="contact-channel-icon"><Icon name="mail" size={18} /></div>
              <div>
                <div className="contact-channel-label">E-mail</div>
                <a href={`mailto:${EMAIL}`} className="contact-channel-value" style={{ color: "inherit", textDecoration: "none" }}>{EMAIL}</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="eyebrow">Orçamento sem custo</div>
            <h2 className="contact-form-title">Pedir orçamento</h2>
            <div className="field">
              <label htmlFor="f-nome">Nome</label>
              <input id="f-nome" name="nome" type="text" required autoComplete="name" placeholder="Seu nome completo" value={form.nome} onChange={handle("nome")} />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="f-tel">Telefone / WhatsApp</label>
                <input id="f-tel" name="tel" type="tel" required autoComplete="tel" placeholder="(71) 9 0000-0000" value={form.tel} onChange={handle("tel")} />
              </div>
              <div className="field">
                <label htmlFor="f-email">E-mail (opcional)</label>
                <input id="f-email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" value={form.email} onChange={handle("email")} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-tipo">Tipo de serviço</label>
              <select id="f-tipo" name="tipo" value={form.tipo} onChange={handle("tipo")}>
                <option value="" disabled>Selecione o tipo de serviço…</option>
                {TIPOS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-msg">Descreva sua necessidade</label>
              <textarea id="f-msg" name="msg" placeholder="Conte o que precisa, prazo desejado, bairro…" value={form.msg} onChange={handle("msg")}></textarea>
            </div>
            <div className="field field-check">
              <label className="check-label" htmlFor="f-aceito">
                <input id="f-aceito" type="checkbox" checked={form.aceito} onChange={(e) => setForm({ ...form, aceito: e.target.checked })} />
                <span>
                  Li e concordo com a <Link href="/privacidade" className="link-inline">Política de Privacidade</Link>.
                  Autorizo o uso dos meus dados para retorno sobre o orçamento solicitado.
                </span>
              </label>
            </div>
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="form-actions">
              <button type="submit" className="btn">
                <Icon name="wa" size={16} /> Enviar pelo WhatsApp
              </button>
            </div>
            <p className="form-note">O WhatsApp abre com o pedido já escrito; é só tocar em enviar.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
