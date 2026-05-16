/* ============================================================
   Shared components: icons, voltage gauge, animated circuit
   ============================================================ */

const Icon = ({ name, size = 22, stroke = 1.6 }) => {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  const paths = {
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
    plug: (<g><path d="M9 2v6" /><path d="M15 2v6" /><path d="M7 8h10v4a5 5 0 0 1-10 0V8z" /><path d="M12 17v5" /></g>),
    panel: (<g><rect x="3" y="3" width="18" height="18" /><path d="M3 8h18" /><path d="M8 12h2" /><path d="M14 12h2" /><path d="M8 16h2" /><path d="M14 16h2" /></g>),
    house: (<g><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></g>),
    factory: (<g><path d="M3 21V10l6 4V10l6 4V7l6 3v11z" /><path d="M9 21v-4" /><path d="M15 21v-4" /></g>),
    spda: (<g><path d="M12 2v6" /><path d="M9 8h6" /><path d="M12 8v6l-3 4h6l-3-4" /><path d="M12 22h0" /></g>),
    wrench: (<g><path d="M14 6a4 4 0 0 0-4 4c0 .5.1 1 .2 1.4L3 18.6 5.4 21l7.2-7.2c.4.1.9.2 1.4.2a4 4 0 0 0 4-4c0-.7-.2-1.3-.5-1.9L15 10.5 13.5 9l2.4-2.5C15.3 6.2 14.7 6 14 6z" /></g>),
    chip: (<g><rect x="6" y="6" width="12" height="12" /><path d="M9 1v5" /><path d="M15 1v5" /><path d="M9 18v5" /><path d="M15 18v5" /><path d="M1 9h5" /><path d="M1 15h5" /><path d="M18 9h5" /><path d="M18 15h5" /></g>),
    shield: <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />,
    mail: (<g><rect x="2" y="4" width="20" height="16" /><path d="m22 4-10 9L2 4" /></g>),
    pin: (<g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></g>),
    arrow: (<g><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></g>),
    plus: (<g><path d="M12 5v14" /><path d="M5 12h14" /></g>),
    check: <path d="M20 6 9 17l-5-5" />,
    wa: (<g><path d="M21 12a9 9 0 1 1-3.5-7l3.5-1-1 3.5A9 9 0 0 1 21 12z" /><path d="M8 10c0 4 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2-2 1z" /></g>),
    star: <path d="m12 2 3 7 7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z" />,
    voltage: (<g><path d="M3 12h3l2-6 4 12 2-6h3" /><path d="M18 12h3" /></g>),
    eye: (<g><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></g>),
    clock: (<g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>),
    cog: (<g><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M5 12H2M22 12h-3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" /></g>),
    ac: (<g><rect x="1" y="4" width="22" height="9" rx="2" /><path d="M8 13v4M12 13v5M16 13v4" /><path d="M5 17h14" /></g>),
    cam: (<g><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></g>),
  };
  return <svg {...common}>{paths[name]}</svg>;
};

// ----- Voltagem gauge -----
const VoltageGauge = () => {
  const [val, setVal] = React.useState(217);
  const [bars, setBars] = React.useState(14);
  React.useEffect(() => {
    const id = setInterval(() => {
      const v = 215 + Math.floor(Math.random() * 10);
      setVal(v);
      setBars(12 + Math.floor(Math.random() * 6));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-gauge">
      <div className="gauge-head">
        <span>● Monitor</span><span>L1·N · 60Hz</span>
      </div>
      <div className="gauge-val">{val}</div>
      <div className="gauge-unit">Volts AC · Estável</div>
      <div className="gauge-bars">
        {Array.from({length: 18}).map((_, i) => (
          <span key={i} className={i < bars ? "on" : ""}></span>
        ))}
      </div>
      <div className="gauge-foot">
        <span>MIN 208</span><span>MAX 232</span>
      </div>
    </div>
  );
};

// ----- Animated circuit lines at hero bottom -----
const CircuitLines = () => (
  <div className="hero-circuit">
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

// ----- Reveal-on-scroll wrapper -----
// IMPORTANT: clones its single child to keep grid-item targeting working —
// .services > .reveal would not match .span-6 etc.
const Reveal = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const child = React.Children.only(children);
  return React.cloneElement(child, {
    ref,
    className: (child.props.className || "") + " reveal" + (seen ? " in" : ""),
    style: { ...(child.props.style || {}), transitionDelay: delay + "ms" },
  });
};

// ----- Section header -----
const SectionHead = ({ num, label, title, children }) => (
  <div className="section-head container">
    <div>
      <div className="sh-num">{num}</div>
      <div className="sh-label">{label}</div>
    </div>
    <div>
      <h2 dangerouslySetInnerHTML={{__html: title}} />
      {children && <p>{children}</p>}
    </div>
  </div>
);

Object.assign(window, { Icon, VoltageGauge, CircuitLines, Reveal, SectionHead });


/* ============================================================
   Sections — all major content blocks
   ============================================================ */

// ---------------------------- ROUTER
const PAGES = [
  { id: "home",         label: "Início" },
  { id: "servicos",     label: "Serviços" },
  { id: "sobre",        label: "A EM" },
  { id: "processo",     label: "Processo" },
  { id: "obras",        label: "Obras" },
  { id: "faq",          label: "FAQ" },
  { id: "contato",      label: "Contato" },
];

const usePage = () => {
  const read = () => {
    const h = (window.location.hash || "#home").replace(/^#\/?/, "");
    return PAGES.some(p => p.id === h) ? h : "home";
  };
  const [page, setPage] = React.useState(read);
  React.useEffect(() => {
    const onHash = () => {
      setPage(read());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const navigate = (id) => { window.location.hash = "#" + id; };
  return [page, navigate];
};

// ---------------------------- NAV
const Nav = ({ page, navigate }) => {
  const [open, setOpen] = React.useState(false);
  const go = (id) => { setOpen(false); navigate(id); };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => go("home")}>
          <img src="logo.jpeg" alt="EM Elétrica" className="nav-logo-img" onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="inline"; }} />
          <span className="em-mark" style={{display:"none"}}>EM</span>
          <span>
            EM Elétrica
            <br />
            <small>CREA · NR-10 · Seg–Sáb 7h–17h</small>
          </span>
        </button>

        <div className="nav-links">
          {PAGES.filter(p => p.id !== "home" && p.id !== "contato").map(p => (
            <button
              key={p.id}
              className={"nav-link" + (page === p.id ? " active" : "")}
              onClick={() => navigate(p.id)}
            >{p.label}</button>
          ))}
        </div>

        <button className="nav-cta" onClick={() => navigate("contato")}>
          Orçamento grátis <Icon name="arrow" size={14} />
        </button>

        <button
          className={"nav-hamburger" + (open ? " is-open" : "")}
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {PAGES.filter(p => p.id !== "home").map(p => (
            <button
              key={p.id}
              className={"nav-drawer-link" + (page === p.id ? " active" : "")}
              onClick={() => go(p.id)}
            >
              <span>{p.label}</span>
              <Icon name="arrow" size={14} />
            </button>
          ))}
          <div className="nav-drawer-footer">
            <button className="nav-drawer-cta" onClick={() => go("contato")}>
              Orçamento grátis <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// ---------------------------- PAGE HERO (for non-home pages)
const PageHero = ({ kicker, title, sub }) => (
  <section className="page-hero">
    <div className="container">
      <div className="eyebrow">{kicker}</div>
      <h1 className="page-hero-title" dangerouslySetInnerHTML={{__html: title}} />
      {sub && <p className="page-hero-sub">{sub}</p>}
    </div>
  </section>
);

// ---------------------------- HERO
const Hero = ({ navigate }) => (
  <section className="hero" id="top">
    <div className="container">
      <div className="hero-tag">
        <span className="pulse"></span>
        Seg a Sáb · 7h às 17h · 20 anos no mercado
      </div>
      <h1 className="display hero-title">
        Energia<br/>
        <span className="accent">sob controle.</span><br/>
        <span className="stroke">Obra entregue.</span>
      </h1>
      <p className="hero-sub">
        Instalações, manutenções e obras elétricas executadas por equipe técnica
        certificada NR-10. Da entrada de energia ao acabamento: projeto, padrão
        de concessionária, quadros, automação e laudos com ART.
      </p>
      <div className="hero-cta-row">
        <button className="btn" onClick={() => navigate("contato")}>
          Pedir orçamento <Icon name="arrow" size={16} />
        </button>
        <a href="https://wa.me/5571991358822" className="btn ghost">
          <Icon name="wa" size={16} /> WhatsApp direto
        </a>
      </div>
    </div>
    <VoltageGauge />
    <CircuitLines />
  </section>
);

// ---------------------------- TICKER
const Ticker = () => {
  const items = [
    "★ Obras residenciais",
    "★ Comercial · Industrial · Saúde",
    "★ Padrão de entrada",
    "★ SPDA / Aterramento",
    "★ Manutenção elétrica",
    "★ Laudos com ART",
    "★ Projetos elétricos",
    "★ Subestações",
    "★ Pequenos serviços",
    "★ Quadros de distribuição",
    "★ Ar-condicionado · Split · VRF",
    "★ Câmeras de segurança · CFTV",
  ];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
};

// ---------------------------- SERVIÇOS
const Servicos = () => {
  const list = [
    {
      n: "01", icon: "house", title: "Instalações residenciais",
      desc: "Projeto e execução completa, do fio à tomada. Casas, apartamentos, reformas e obras novas.",
      tags: ["Reformas", "Obras novas", "Padrão"], featured: true, span: 6,
    },
    {
      n: "02", icon: "factory", title: "Comercial, industrial & saúde",
      desc: "Lojas, supermercados, escritórios, condomínios, galpões, fábricas, clínicas e hospitais. Instalações completas, motores, comandos elétricos, painéis e adequações técnicas em qualquer porte.",
      tags: ["Clínicas", "Hospitais", "Galpões", "Motores", "Painéis"], span: 6,
    },
    {
      n: "03", icon: "panel", title: "Quadros de distribuição",
      desc: "Montagem, expansão e padronização de QDC e QGBT com disjuntores DR e DPS.",
      tags: ["QDC", "QGBT", "DPS"], span: 4,
    },
    {
      n: "04", icon: "plug", title: "Padrão de entrada",
      desc: "Padrão de concessionária dentro da norma, pronto para vistoria.",
      tags: ["Concessionária"], span: 4,
    },
    {
      n: "05", icon: "spda", title: "SPDA & aterramento",
      desc: "Para-raios, hastes, malha de aterramento e medição de resistência de terra.",
      tags: ["Para-raios", "ART"], span: 4,
    },
    {
      n: "06", icon: "wrench", title: "Manutenção preventiva & corretiva",
      desc: "Contratos mensais, inspeção termográfica, troca de componentes e relatórios técnicos.",
      tags: ["Termografia", "Contratos"], span: 4,
    },
    {
      n: "07", icon: "bolt", title: "Pequenos serviços",
      desc: "Atendemos demandas pontuais sem burocracia — do serviço rápido ao reparo emergencial.",
      list: [
        "Instalação de lustres e luminárias",
        "Instalação de ventiladores de teto",
        "Troca de tomadas e interruptores",
        "Instalação de chuveiro elétrico",
        "Ponto elétrico para ar-condicionado",
        "Extensão e novos pontos elétricos",
        "Instalação de campainha e interfone",
        "Sensor de presença e automação básica",
        "Troca de disjuntores e DPS",
        "Instalação de tomada USB",
        "Reparo de curto-circuito",
        "Lâmpada de emergência",
      ],
      tags: ["Lustres", "Ventiladores", "Chuveiros", "Ar-cond.", "Tomadas"], span: 12,
    },
    {
      n: "08", icon: "shield", title: "Laudos & ART",
      desc: "Laudos NR-10, NR-12 e responsabilidade técnica documentada quando exigido pela obra.",
      tags: ["NR-10", "Laudos"], span: 4,
    },
    {
      n: "09", icon: "eye", title: "Projetos elétricos",
      desc: "Desenvolvimento de projetos elétricos residenciais, comerciais e industriais com memorial de cálculo.",
      tags: ["Projeto", "Memorial", "Cálculo"], span: 4,
    },
    {
      n: "10", icon: "ac", title: "Ar-condicionado",
      desc: "Instalação e manutenção de ar-condicionados residenciais, comerciais e industriais. Split, cassete, janela e VRF. Limpeza, recarga de gás e revisão de componentes.",
      tags: ["Instalação", "Manutenção", "Split", "Limpeza", "VRF"], span: 6,
    },
    {
      n: "11", icon: "cam", title: "Câmeras de segurança",
      desc: "Instalação e configuração de sistemas CFTV, câmeras IP, DVR e NVR. Monitoramento residencial e comercial com acesso remoto pelo celular.",
      tags: ["CFTV", "Câmera IP", "DVR/NVR", "Monitoramento", "Remoto"], span: 6,
    },
  ];
  return (
    <section id="servicos">
      <SectionHead
        num="// 01"
        label="O que fazemos"
        title="Tudo que envolve <span class='accent'>fio, força,</span> ar e imagem."
      >
        Atendemos do reparo emergencial à obra completa — elétrica, ar-condicionado
        e câmeras de segurança. Equipe própria, projeto técnico e responsabilidade documentada.
      </SectionHead>
      <div className="container">
        <div className="services">
          {list.map((s) => (
            <Reveal key={s.n} delay={(parseInt(s.n) - 1) * 60}>
              <div className={`service span-${s.span} ${s.featured ? "featured" : ""}`}>
                <div className="svc-top">
                  <div className="svc-num">{s.n} / {String(list.length).padStart(2,"0")}</div>
                  <div className="svc-icon"><Icon name={s.icon} size={32} stroke={1.4} /></div>
                </div>
                <div>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  {s.list && (
                    <ul className="svc-list">
                      {s.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  <div className="svc-tags">
                    {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------- DIFERENCIAIS
const Diferenciais = () => {
  const items = [
    { n: "20", unit: "anos", title: "Mercado", desc: "Duas décadas executando obras elétricas com a mesma equipe técnica." },
    { n: "100", unit: "%", title: "Equipe NR-10", desc: "Todos os eletricistas com curso NR-10 atualizado e EPI completo em obra." },
    { n: "7", unit: "–17h", title: "Seg a Sáb", desc: "Atendimento de segunda a sábado, das 7h às 17h, para orçamentos, visitas técnicas e execução de obras." },
  ];
  return (
    <section id="diferenciais">
      <SectionHead
        num="// 02"
        label="Por que a EM"
        title="<span class='accent'>Seguro, no prazo,</span> sem improviso."
      >
        Obras com checklist técnico, equipe própria e responsabilidade documentada
        sempre que necessário. Nada de gambiarra e sem terceirizar mão de obra crítica.
      </SectionHead>
      <div className="container">
        <div className="diff-grid">
          {items.map((d, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="diff">
                <div className="diff-num">{d.n}<small>{d.unit}</small></div>
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

// ---------------------------- PROCESSO
const Processo = () => {
  const steps = [
    { n: "01", icon: "phone", title: "Diagnóstico", desc: "Visita técnica ou avaliação por foto/vídeo. Levantamento de cargas, situação atual e necessidades." },
    { n: "02", icon: "panel", title: "Orçamento", desc: "Proposta detalhada com materiais, mão de obra, prazo e cronograma, sem letras miúdas." },
    { n: "03", icon: "wrench", title: "Execução", desc: "Equipe uniformizada, EPI completo, obra limpa. Acompanhamento diário e fotos do antes e depois." },
  ];
  return (
    <section id="processo">
      <SectionHead
        num="// 03"
        label="Como trabalhamos"
        title="Um fluxo <span class='accent'>simples</span> do contato à entrega."
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

// ---------------------------- PORTFOLIO
const Obras = () => {
  const projs = [
    { title: "Galpão Industrial · 1200m²", meta: "Cargas trifásicas · QGBT", tag: "Industrial", size: "tall" },
    { title: "Residência alto padrão", meta: "Projeto + automação", tag: "Residencial", size: "wide" },
    { title: "Loja de varejo · Shopping", meta: "Padrão + iluminação", tag: "Comercial", size: "md" },
    { title: "SPDA prédio comercial", meta: "Para-raios + malha", tag: "SPDA", size: "md" },
    { title: "Subestação 75kVA", meta: "Aérea, com transformador", tag: "Energia", size: "wide" },
  ];
  return (
    <section id="obras">
      <SectionHead
        num="// 04"
        label="Obras realizadas"
        title="Obras <span class='accent'>de verdade,</span> entregues no prazo."
      >
        Obras residenciais, comerciais e industriais executadas com equipe própria
        e certificada. Abaixo, alguns trabalhos realizados.
      </SectionHead>
      <div className="container">
        <div className="portfolio">
          {projs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`proj size-${p.size}`}>
                <div className="proj-bg">[ FOTO · obra {String(i+1).padStart(2,"0")} ]</div>
                <div className="proj-info">
                  <div>
                    <div className="proj-title">{p.title}</div>
                    <div className="proj-meta">{p.meta}</div>
                  </div>
                  <div className="proj-tag">{p.tag}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------- STATS
const Stats = () => {
  const items = [
    { v: "1.2", u: "k+", l: "Obras entregues" },
    { v: "12", u: "anos", l: "No mercado" },
    { v: "98", u: "%", l: "Reagendamento zero" },
    { v: "4.9", u: "★", l: "Avaliação Google" },
  ];
  return (
    <div className="container">
      <div className="stats">
        {items.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-val">{s.v}<span className="unit">{s.u}</span></div>
            <div className="stat-label">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------------------- DEPOIMENTOS
const Depoimentos = () => {
  const items = [
    { q: "Refizeram toda a parte elétrica da nossa fábrica em finais de semana, sem parar a produção. Profissional do começo ao fim.", who: "Carlos M.", where: "Indústria · 800m²", stars: 5 },
    { q: "Cheguei em casa com o disjuntor disparando, eles vieram em 40 minutos. Em duas horas tudo resolvido e com laudo do que era.", who: "Patrícia R.", where: "Residencial · Emergência", stars: 5 },
    { q: "Contratamos a manutenção preventiva mensal. Em um ano, zero paradas não programadas. Vale cada centavo.", who: "Roberto S.", where: "Rede de lojas · 6 unidades", stars: 5 },
  ];
  return (
    <section>
      <SectionHead
        num="// 05"
        label="O que dizem"
        title="<span class='accent'>Clientes</span> que voltam a chamar."
      />
      <div className="container">
        <div className="testis">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="testi">
                <div className="testi-quote">{t.q}</div>
                <div className="testi-foot">
                  <div>
                    <div className="testi-who">{t.who}</div>
                    <div className="testi-where">{t.where}</div>
                  </div>
                  <div className="testi-stars">{"★".repeat(t.stars)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------- FAQ
const FAQ = () => {
  const items = [
    { q: "O orçamento tem custo?", a: "Não. A visita técnica e o orçamento detalhado são gratuitos e sem compromisso. Em obras maiores, fazemos o levantamento completo, com planilha de materiais, mão de obra e cronograma." },
    { q: "Vocês emitem ART e laudo técnico?", a: "Emitimos ART e laudo técnico nas obras que exigem responsabilidade técnica documentada, como projetos elétricos, instalações maiores e adequações junto à concessionária." },
    { q: "Vocês desenvolvem projetos elétricos?", a: "Sim. Desenvolvemos projetos elétricos residenciais, comerciais e industriais com memorial de cálculo e todas as especificações técnicas necessárias." },
    { q: "Atendem pequenos serviços?", a: "Sim. Atendemos: instalação de lustres e luminárias, ventiladores de teto, troca de tomadas e interruptores, instalação de chuveiro elétrico, ponto elétrico para ar-condicionado, extensão e novos pontos elétricos, campainha e interfone, sensor de presença, troca de disjuntores e DPS, instalação de tomada USB, reparo de curto-circuito e lâmpada de emergência. Entre em contato e passamos o orçamento." },
    { q: "Trabalham com obra própria ou subempreitam?", a: "Equipe 100% própria, registrada, uniformizada e com NR-10 atualizada. Não terceirizamos mão de obra crítica, é o que garante padrão de execução e responsabilidade técnica." },
    { q: "Atendem fora da capital?", a: "Sim, atendemos região metropolitana e cidades próximas. Para obras de maior porte, deslocamos a equipe para qualquer cidade do estado mediante orçamento prévio." },
    { q: "Qual o horário de atendimento?", a: "Atendemos de segunda a sábado, das 7h às 17h. Para dúvidas e orçamentos, entre em contato pelo WhatsApp ou e-mail." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq">
      <SectionHead
        num="// 06"
        label="Perguntas frequentes"
        title="Tirando as <span class='accent'>dúvidas</span> antes da obra."
      />
      <div className="container">
        <div className="faq">
          {items.map((it, i) => (
            <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-q-num">/{String(i+1).padStart(2,"0")}</span>
                <span className="faq-q-text">{it.q}</span>
                <span className="faq-q-icon"><Icon name="plus" size={14} /></span>
              </button>
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

// ---------------------------- CONTATO
const Contato = () => {
  const [form, setForm] = React.useState({ nome: "", tel: "", email: "", tipo: "", msg: "" });
  const [sent, setSent] = React.useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Orçamento EM Elétrica — ${form.tipo || "Serviço"}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nTelefone/WhatsApp: ${form.tel}\nE-mail: ${form.email}\nTipo de serviço: ${form.tipo}\n\n${form.msg}`
    );
    window.location.href = `mailto:edsonmoura1003@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contato">
      <SectionHead
        num="// 07"
        label="Fale com a EM"
        title="Pronto para <span class='accent'>energizar</span> sua obra?"
      >
        Conte rápido o que você precisa. Respondemos no mesmo dia e marcamos a
        visita técnica gratuita.
      </SectionHead>
      <div className="container">
        <div className="contact">
          <div className="contact-info">
            <h3>Fale<br/>direto<br/>com a gente.</h3>
            <div className="contact-channel">
              <div className="contact-channel-icon"><Icon name="wa" size={18} /></div>
              <div>
                <div className="contact-channel-label">WhatsApp · Seg a Sáb 7h–17h</div>
                <a href="https://wa.me/5571991358822" className="contact-channel-value" style={{color:"inherit",textDecoration:"none"}}>(71) 9 9135-8822</a>
              </div>
            </div>
            <div className="contact-channel">
              <div className="contact-channel-icon"><Icon name="phone" size={18} /></div>
              <div>
                <div className="contact-channel-label">Telefone</div>
                <div className="contact-channel-value">(71) 9 9135-8822</div>
              </div>
            </div>
            <div className="contact-channel">
              <div className="contact-channel-icon"><Icon name="mail" size={18} /></div>
              <div>
                <div className="contact-channel-label">E-mail</div>
                <div className="contact-channel-value">edsonmoura1003@gmail.com</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="eyebrow">// Orçamento sem custo</div>
            <h4>Pedir orçamento</h4>
            {sent ? (
              <div className="form-success">
                <Icon name="check" size={20} />
                Seu cliente de e-mail foi aberto com os dados preenchidos. Nossa equipe responde no mesmo dia.
              </div>
            ) : (
              <>
                <div className="field">
                  <label>Nome</label>
                  <input type="text" required placeholder="Seu nome completo" value={form.nome} onChange={handle("nome")} />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Telefone / WhatsApp</label>
                    <input type="tel" required placeholder="(00) 0 0000-0000" value={form.tel} onChange={handle("tel")} />
                  </div>
                  <div className="field">
                    <label>E-mail</label>
                    <input type="email" placeholder="voce@email.com" value={form.email} onChange={handle("email")} />
                  </div>
                </div>
                <div className="field">
                  <label>Tipo de serviço</label>
                  <select value={form.tipo} onChange={handle("tipo")}>
                    <option value="" disabled>Selecione o tipo de serviço…</option>
                    <option>Instalação residencial</option>
                    <option>Instalação comercial</option>
                    <option>Instalação industrial</option>
                    <option>Instalação em clínica ou hospital</option>
                    <option>Padrão de entrada / concessionária</option>
                    <option>Quadro de distribuição (QDC / QGBT)</option>
                    <option>SPDA / aterramento</option>
                    <option>Manutenção preventiva ou corretiva</option>
                    <option>Lustre / luminária</option>
                    <option>Ventilador de teto</option>
                    <option>Chuveiro elétrico</option>
                    <option>Ponto de ar-condicionado</option>
                    <option>Tomadas e interruptores</option>
                    <option>Campainha / interfone</option>
                    <option>Sensor de presença</option>
                    <option>Disjuntor / DPS</option>
                    <option>Projeto elétrico</option>
                    <option>Laudo / ART</option>
                    <option>Ar-condicionado · Instalação</option>
                    <option>Ar-condicionado · Manutenção / limpeza</option>
                    <option>Câmeras de segurança · Instalação</option>
                    <option>Câmeras de segurança · Configuração</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="field">
                  <label>Descreva sua necessidade</label>
                  <textarea placeholder="Conte o que precisa, prazo desejado, endereço aproximado…" value={form.msg} onChange={handle("msg")}></textarea>
                </div>
                <button type="submit" className="btn" style={{marginTop: 16}}>
                  Enviar pedido <Icon name="arrow" size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// ---------------------------- FOOTER
const Footer = ({ navigate }) => (
  <footer className="footer">
    <div className="container">
      <h2 className="footer-big">EM<span className="accent">.</span></h2>
      <div className="footer-cols">
        <div className="footer-col">
          <h6>// Sobre</h6>
          <p style={{color: "var(--text-dim)", fontSize: 14, margin: 0, maxWidth: 360, lineHeight: 1.6}}>
            EM Instalações e Manutenções Elétricas. 20 anos executando obras elétricas
            com equipe técnica certificada NR-10. CNPJ 57.594.909/0001-32.
          </p>
        </div>
        <div className="footer-col">
          <h6>// Serviços</h6>
          <ul>
            <li><a href="#servicos">Residencial</a></li>
            <li><a href="#servicos">Comercial & industrial</a></li>
            <li><a href="#servicos">Clínicas & hospitais</a></li>
            <li><a href="#servicos">SPDA</a></li>
            <li><a href="#servicos">Projetos elétricos</a></li>
            <li><a href="#servicos">Pequenos serviços</a></li>
            <li><a href="#servicos">Ar-condicionado</a></li>
            <li><a href="#servicos">Câmeras de segurança</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>// Empresa</h6>
          <ul>
            <li><a href="#sobre">A EM</a></li>
            <li><a href="#obras">Obras</a></li>
            <li><a href="#processo">Processo</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>// Contato</h6>
          <ul>
            <li><a href="https://wa.me/5571991358822">WhatsApp</a></li>
            <li><a href="tel:71991358822">(71) 9 9135-8822</a></li>
            <li><a href="mailto:edsonmoura1003@gmail.com">E-mail</a></li>
            <li><a href="#contato">Orçamento</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <div>© 2026 EM Elétrica · NR-10 · CNPJ 57.594.909/0001-32</div>
        <div>Engenharia · Obras · Manutenção</div>
      </div>
    </div>
  </footer>
);

// ---------------------------- HOME EXTRA SECTIONS
const HomeServicesTeaser = ({ navigate }) => {
  const items = [
    { icon: "house",   title: "Residencial",          d: "Casas, apartamentos e reformas." },
    { icon: "factory", title: "Comercial, industrial & saúde", d: "Lojas, galpões, fábricas, clínicas e hospitais." },
    { icon: "panel",   title: "Quadros & padrões",    d: "QDC, QGBT, padrão concessionária." },
    { icon: "spda",    title: "SPDA / aterramento",   d: "Para-raios e malha." },
    { icon: "wrench",  title: "Manutenção elétrica",  d: "Preventiva, corretiva, termografia." },
    { icon: "bolt",    title: "Pequenos serviços",    d: "Lustres, ventiladores, chuveiros, ar-cond. e muito mais." },
    { icon: "eye",     title: "Projetos elétricos",   d: "Projetos com memorial de cálculo." },
    { icon: "ac",      title: "Ar-condicionado",      d: "Instalação e manutenção de splits e VRF." },
    { icon: "cam",     title: "Câmeras de segurança", d: "CFTV, câmera IP, DVR/NVR e acesso remoto." },
  ];
  return (
    <section>
      <SectionHead
        num="// O que fazemos"
        label="Serviços"
        title="Da <span class='accent'>tomada</span> à <span class='accent'>subestação.</span>"
      >
        Equipe própria e laudo técnico em toda obra. Cobrimos desde o reparo
        emergencial até projetos completos com ART.
      </SectionHead>
      <div className="container">
        <div className="home-teaser">
          {items.map((s, i) => (
            <div className="home-teaser-card" key={i} onClick={() => navigate("servicos")}>
              <div className="ht-icon"><Icon name={s.icon} size={26} stroke={1.5} /></div>
              <div className="ht-title">{s.title}</div>
              <div className="ht-desc">{s.d}</div>
              <div className="ht-link">Ver mais <Icon name="arrow" size={12} /></div>
            </div>
          ))}
        </div>
        <div className="home-teaser-cta">
          <button className="btn ghost" onClick={() => navigate("servicos")}>
            Ver todos os serviços <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const HomeCTA = ({ navigate }) => (
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
          Orçamento detalhado em 24h, sem compromisso. Equipe própria,
          certificada NR-10, com responsabilidade técnica em cada obra.
        </p>
        <div className="home-cta-btns">
          <button className="home-cta-btn-primary" onClick={() => navigate("contato")}>
            Pedir orçamento <Icon name="arrow" size={16} />
          </button>
          <a href="https://wa.me/5571991358822" className="home-cta-btn-wa">
            <Icon name="wa" size={18} /> (71) 9 9135-8822
          </a>
        </div>
      </div>
    </div>
  </section>
);

const InlineCTA = ({ navigate }) => (
  <section className="inline-cta">
    <div className="container">
      <div className="inline-cta-inner">
        <div className="inline-cta-text">
          <div className="eyebrow">// Próximo passo</div>
          <h3>Vamos calcular sua obra?</h3>
        </div>
        <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
          <button className="btn" onClick={() => navigate("contato")}>
            Pedir orçamento <Icon name="arrow" size={16} />
          </button>
          <a href="https://wa.me/5571991358822" className="btn ghost">
            <Icon name="wa" size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ---------------------------- WA FLOAT
const WAFloat = () => (
  <a href="https://wa.me/5571991358822" className="wa-float" aria-label="WhatsApp">
    <Icon name="wa" size={26} stroke={1.8} />
  </a>
);

Object.assign(window, { Nav, Hero, Ticker, Servicos, Diferenciais, Processo, Obras, Stats, Depoimentos, FAQ, Contato, Footer, WAFloat });


/* ============================================================
   App root + Tweaks panel
   ============================================================ */

const App = () => {
  const [t, setTweak] = useTweaks(window.TWEAKS_DEFAULTS);
  const [page, navigate] = usePage();

  React.useEffect(() => {
    document.documentElement.setAttribute("data-palette", t.palette);
    document.documentElement.setAttribute("data-show-grid", String(t.showGrid));
    document.documentElement.setAttribute("data-reduce-motion", String(t.reduceMotion));
  }, [t.palette, t.showGrid, t.reduceMotion]);

  const renderPage = () => {
    switch (page) {
      case "servicos":
        return <><Servicos /><InlineCTA navigate={navigate} /></>;
      case "sobre":
        return <><PageHero kicker="// A EM" title="<span class='accent'>Engenharia elétrica</span> com mão de obra própria." sub="20 anos executando obras elétricas com equipe NR-10. Sem terceirizar mão de obra crítica, sem improviso, com responsabilidade técnica documentada." /><Diferenciais /><Depoimentos /></>;
      case "processo":
        return <><Processo /><FAQ /></>;
      case "obras":
        return <><Obras /><InlineCTA navigate={navigate} /></>;
      case "faq":
        return <><FAQ /><InlineCTA navigate={navigate} /></>;
      case "contato":
        return <><Contato /></>;
      default:
        return <><Hero navigate={navigate} /><Ticker /><HomeServicesTeaser navigate={navigate} /><Depoimentos /><HomeCTA navigate={navigate} /></>;
    }
  };

  return (
    <>
      <div className="grid-bg"></div>
      <Nav page={page} navigate={navigate} />
      <main key={page} className="page-fade">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <WAFloat />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Paleta">
          <TweakRadio
            label="Cor"
            value={t.palette}
            onChange={v => setTweak("palette", v)}
            options={[
              { value: "voltagem", label: "Volt" },
              { value: "arco", label: "Arco" },
              { value: "ambar", label: "Âmbar" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Visual">
          <TweakToggle
            label="Grade técnica de fundo"
            value={t.showGrid}
            onChange={v => setTweak("showGrid", v)}
          />
          <TweakToggle
            label="Reduzir animações"
            value={t.reduceMotion}
            onChange={v => setTweak("reduceMotion", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
