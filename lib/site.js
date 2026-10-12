// Dados centrais do site: contato, serviços, obras e FAQ.
// As páginas e os componentes leem tudo daqui, então um telefone ou um
// texto de serviço muda num lugar só.

export const SITE_URL = "https://eminstalacoes.vercel.app";
export const SITE_NAME = "EM Elétrica";
export const COMPANY = "EM Instalações e Manutenções Elétricas";
export const CNPJ = "57.594.909/0001-32";
export const EMAIL = "edsonmoura100386@gmail.com";
export const PHONE_DISPLAY = "(71) 9 9135-8822";
export const PHONE_TEL = "+5571991358822";
export const HOURS = "Seg a Sáb · 7h às 17h";

const WA_BASE = "https://wa.me/5571991358822";
export const waLink = (text = "Olá! Vim pelo site e gostaria de um orçamento.") =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "A EM" },
  { href: "/processo", label: "Processo" },
  { href: "/obras", label: "Obras" },
  { href: "/faq", label: "FAQ" },
  { href: "/dicas", label: "Dicas" },
];

// ---------------------------------------------------------------- SERVIÇOS
// `span` é a largura do card na grade de 12 colunas da página /servicos.
// `img` aponta para public/img/obras/<img>.jpg; `imgPos` é o object-position.
// A foto aparece sempre na página do serviço; na grade de /servicos só quando
// `cardPhoto` é true (fotos em cards de 3 ou 12 colunas desequilibram a grade).
export const SERVICES = [
  {
    slug: "instalacoes-eletricas-residenciais",
    n: "01", icon: "house", span: 6, featured: true,
    title: "Instalações residenciais",
    teaser: "Casas, apartamentos e reformas.",
    desc: "Projeto e execução completa, do fio à tomada. Casas, apartamentos, reformas e obras novas.",
    tags: ["Reformas", "Obras novas", "Padrão"],
    img: "equipe-em-residencial", imgPos: "50% 22%", cardPhoto: true,
    imgAlt: "Eletricistas da EM com camisa da empresa fazendo instalação em residência",
    h1: "Instalações elétricas residenciais em Salvador",
    metaTitle: "Eletricista residencial em Salvador",
    metaDescription: "Instalação elétrica completa para casas e apartamentos em Salvador e região: reformas, obras novas, troca de fiação e quadros. Equipe própria NR-10. Orçamento grátis.",
    intro: "Fazemos a parte elétrica da sua casa ou apartamento do começo ao fim: levantamento de cargas, passagem de fiação, quadro de distribuição, tomadas, iluminação e acabamento. Atendemos obra nova, reforma e troca de fiação antiga em Salvador e região metropolitana.",
    includes: [
      "Instalação elétrica completa em obra nova",
      "Reforma e troca de fiação antiga",
      "Quadro de distribuição com disjuntores, DR e DPS",
      "Novos pontos de tomada e iluminação",
      "Circuitos dedicados para chuveiro e ar-condicionado",
      "Adequação para aumento de carga",
    ],
    faqs: [
      { q: "Vocês fazem a troca de toda a fiação de um apartamento antigo?", a: "Sim. Avaliamos a fiação atual, o quadro e os pontos existentes e passamos uma proposta com o que precisa ser trocado, prazo e materiais." },
      { q: "Preciso estar em casa durante o serviço?", a: "Não necessariamente. Combinamos acesso e horários antes de começar, e a equipe trabalha uniformizada e mantém o ambiente limpo." },
    ],
  },
  {
    slug: "instalacoes-eletricas-comerciais-industriais",
    n: "02", icon: "factory", span: 6,
    title: "Comercial, industrial & saúde",
    teaser: "Lojas, galpões, fábricas, clínicas e hospitais.",
    desc: "Lojas, supermercados, escritórios, condomínios, galpões, fábricas, clínicas e hospitais. Instalações completas, motores, comandos elétricos, painéis e adequações técnicas em qualquer porte.",
    tags: ["Clínicas", "Hospitais", "Galpões", "Motores", "Painéis"],
    img: "eletrocalha-corte", imgPos: "50% 42%", cardPhoto: true,
    imgAlt: "Eletricista cortando eletrocalha perfurada em obra comercial",
    h1: "Instalações elétricas comerciais e industriais em Salvador",
    metaTitle: "Elétrica comercial e industrial em Salvador",
    metaDescription: "Instalações elétricas para lojas, escritórios, condomínios, galpões, fábricas, clínicas e hospitais em Salvador. Eletrocalhas, painéis, motores e comandos. Equipe NR-10.",
    intro: "Executamos instalações elétricas para empresas de qualquer porte: infraestrutura com eletrodutos e eletrocalhas, alimentação de máquinas e motores, painéis de comando, iluminação e adequações técnicas. Planejamos a obra para reduzir paradas na sua operação.",
    includes: [
      "Infraestrutura com eletrodutos e eletrocalhas",
      "Alimentação de máquinas, motores e comandos elétricos",
      "Montagem e adequação de painéis e QGBT",
      "Iluminação comercial e industrial",
      "Instalações em clínicas, consultórios e hospitais",
      "Adequações exigidas por vistoria ou concessionária",
    ],
    faqs: [
      { q: "Vocês trabalham fora do horário comercial para não parar a empresa?", a: "Podemos planejar etapas em horários de menor movimento. Combinamos isso no orçamento, conforme o tamanho da obra." },
      { q: "Atendem condomínios?", a: "Sim. Fazemos manutenção e adequação das áreas comuns, quadros gerais, iluminação e infraestrutura de condomínios." },
    ],
  },
  {
    slug: "quadros-de-distribuicao",
    n: "03", icon: "panel", span: 3,
    title: "Quadros de distribuição",
    teaser: "QDC, QGBT, padrão concessionária.",
    desc: "Montagem, expansão e padronização de QDC e QGBT com disjuntores DR e DPS.",
    tags: ["QDC", "QGBT", "DPS"],
    img: "qdc-organizado", imgPos: "50% 40%",
    imgAlt: "Quadro de distribuição com disjuntores e circuitos identificados",
    h1: "Montagem e troca de quadro de distribuição em Salvador",
    metaTitle: "Quadro de distribuição em Salvador",
    metaDescription: "Montagem, troca e organização de quadro de distribuição (QDC e QGBT) com disjuntores, DR e DPS em Salvador. Circuitos identificados e dentro da norma.",
    intro: "Um quadro bem montado protege a instalação e facilita qualquer manutenção. Montamos, ampliamos e reorganizamos quadros de distribuição residenciais e comerciais, com circuitos identificados, disjuntores dimensionados e proteção DR e DPS.",
    includes: [
      "Troca de quadro antigo por quadro novo",
      "Inclusão de DR (proteção contra choque) e DPS (surtos)",
      "Divisão e identificação dos circuitos",
      "Ampliação do quadro para novos circuitos",
      "Montagem de QGBT e painéis de transferência",
      "Organização de quadros com fiação desordenada",
    ],
    faqs: [
      { q: "Quando é preciso trocar o quadro de energia?", a: "Quando o disjuntor desarma com frequência, o quadro esquenta, não há espaço para novos circuitos, ou ainda existem fusíveis antigos. Na visita avaliamos e explicamos o que é necessário." },
      { q: "O que são DR e DPS?", a: "O DR desliga o circuito quando detecta fuga de corrente, protegendo contra choques. O DPS protege os aparelhos contra surtos, como os causados por raios." },
    ],
  },
  {
    slug: "padrao-de-entrada",
    n: "04", icon: "plug", span: 3,
    title: "Padrão de entrada",
    teaser: "Padrão de concessionária pronto para vistoria.",
    desc: "Padrão de concessionária dentro da norma, pronto para vistoria.",
    tags: ["Concessionária"],
    h1: "Padrão de entrada de energia em Salvador",
    metaTitle: "Padrão de entrada de energia em Salvador",
    metaDescription: "Instalação e adequação de padrão de entrada de energia em Salvador, dentro das normas da concessionária e pronto para vistoria. Ligação nova e aumento de carga.",
    intro: "Instalamos e adequamos o padrão de entrada de energia conforme as normas da concessionária, para ligação nova, aumento de carga ou regularização. Entregamos o padrão pronto para a vistoria.",
    includes: [
      "Padrão para ligação nova",
      "Adequação de padrão reprovado em vistoria",
      "Mudança de padrão para aumento de carga",
      "Aterramento do padrão",
      "Orientação sobre o pedido junto à concessionária",
    ],
    faqs: [
      { q: "Meu padrão foi reprovado na vistoria. Vocês resolvem?", a: "Sim. Avaliamos o motivo da reprovação e fazemos as adequações necessárias para a nova vistoria." },
    ],
  },
  {
    slug: "spda-aterramento",
    n: "05", icon: "spda", span: 3,
    title: "SPDA & aterramento",
    teaser: "Para-raios e malha de aterramento.",
    desc: "Para-raios, hastes, malha de aterramento e medição de resistência de terra.",
    tags: ["Para-raios", "ART"],
    h1: "SPDA e aterramento em Salvador",
    metaTitle: "SPDA e aterramento em Salvador",
    metaDescription: "Instalação e manutenção de SPDA (para-raios), malha de aterramento e medição de resistência de terra em Salvador, com ART quando exigido.",
    intro: "Instalamos e mantemos sistemas de proteção contra descargas atmosféricas (SPDA) e aterramento para residências, prédios e empresas, com medição de resistência de terra e documentação técnica quando exigida.",
    includes: [
      "Instalação de SPDA (para-raios)",
      "Malha de aterramento e hastes",
      "Medição de resistência de terra",
      "Inspeção e manutenção de SPDA existente",
      "Laudo com ART quando exigido",
    ],
    faqs: [
      { q: "Prédio precisa de laudo de SPDA?", a: "Edificações que exigem SPDA precisam de inspeção periódica e laudo. Fazemos a inspeção e emitimos a documentação com ART quando necessário." },
    ],
  },
  {
    slug: "manutencao-eletrica",
    n: "06", icon: "wrench", span: 3,
    title: "Manutenção preventiva & corretiva",
    teaser: "Preventiva, corretiva, termografia.",
    desc: "Contratos mensais, inspeção termográfica, troca de componentes e relatórios técnicos.",
    tags: ["Termografia", "Contratos"],
    h1: "Manutenção elétrica preventiva e corretiva em Salvador",
    metaTitle: "Manutenção elétrica em Salvador",
    metaDescription: "Manutenção elétrica preventiva e corretiva para empresas e condomínios em Salvador: contratos mensais, inspeção termográfica, troca de componentes e relatórios técnicos.",
    intro: "A manutenção preventiva evita paradas e custos maiores. Oferecemos visitas programadas e contratos mensais para empresas e condomínios, além de atendimento corretivo quando algo para de funcionar.",
    includes: [
      "Contratos de manutenção mensal",
      "Inspeção termográfica de quadros e painéis",
      "Reaperto de conexões e troca de componentes",
      "Atendimento corretivo",
      "Relatórios técnicos das visitas",
    ],
    faqs: [
      { q: "Como funciona o contrato de manutenção?", a: "Definimos a frequência das visitas e o que é verificado em cada uma. Ao final, você recebe um relatório com o que foi feito e o que precisa de atenção." },
    ],
  },
  {
    slug: "pequenos-servicos-eletricos",
    n: "07", icon: "bolt", span: 12,
    title: "Pequenos serviços",
    teaser: "Lustres, ventiladores, chuveiros, ar-cond. e muito mais.",
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
    tags: ["Lustres", "Ventiladores", "Chuveiros", "Ar-cond.", "Tomadas"],
    img: "drivers-led", imgPos: "50% 55%",
    imgAlt: "Eletricista da EM ligando drivers de LED em residência",
    h1: "Eletricista para pequenos serviços em Salvador",
    metaTitle: "Eletricista para pequenos serviços em Salvador",
    metaDescription: "Eletricista em Salvador para pequenos serviços: instalação de lustre, ventilador de teto, chuveiro, tomadas, interruptores, disjuntores e reparo de curto-circuito.",
    intro: "Nem todo serviço é uma obra. Atendemos demandas pontuais na sua casa ou empresa com a mesma equipe e o mesmo cuidado das obras maiores.",
    faqs: [
      { q: "Vocês atendem serviço pequeno, como trocar uma tomada?", a: "Sim. Mande pelo WhatsApp o que precisa, com foto se possível, e passamos o orçamento." },
      { q: "Instalam ventilador de teto e lustre?", a: "Sim, incluindo a verificação do ponto e da fixação no teto." },
    ],
  },
  {
    slug: "laudos-e-art",
    n: "08", icon: "shield", span: 6,
    title: "Laudos & ART",
    teaser: "Laudos NR-10 e responsabilidade técnica.",
    desc: "Laudos NR-10, NR-12 e responsabilidade técnica documentada quando exigido pela obra.",
    tags: ["NR-10", "Laudos"],
    h1: "Laudo elétrico e ART em Salvador",
    metaTitle: "Laudo elétrico e ART em Salvador",
    metaDescription: "Laudos elétricos NR-10 e NR-12 e emissão de ART para obras e instalações em Salvador e região, quando exigido pela obra ou pela vistoria.",
    intro: "Emitimos laudos técnicos e ART (Anotação de Responsabilidade Técnica) nas obras e instalações que exigem responsabilidade técnica documentada, como adequações, vistorias e instalações de maior porte.",
    includes: [
      "Laudo de instalações elétricas (NR-10)",
      "Laudo de máquinas e equipamentos (NR-12)",
      "ART de execução e de projeto",
      "Relatório de inspeção com recomendações",
    ],
    faqs: [
      { q: "Quando a ART é obrigatória?", a: "Em obras e serviços que exigem responsabilidade técnica, como projetos, instalações de maior porte e adequações pedidas por vistoria ou concessionária." },
    ],
  },
  {
    slug: "projetos-eletricos",
    n: "09", icon: "eye", span: 6,
    title: "Projetos elétricos",
    teaser: "Projetos com memorial de cálculo.",
    desc: "Desenvolvimento de projetos elétricos residenciais, comerciais e industriais com memorial de cálculo.",
    tags: ["Projeto", "Memorial", "Cálculo"],
    h1: "Projeto elétrico em Salvador",
    metaTitle: "Projeto elétrico em Salvador",
    metaDescription: "Projetos elétricos residenciais, comerciais e industriais em Salvador, com memorial de cálculo, quadro de cargas e especificação de materiais.",
    intro: "Desenvolvemos projetos elétricos com memorial de cálculo, quadro de cargas e especificação de materiais. O mesmo time que projeta pode executar a obra, o que evita surpresas entre o papel e a instalação.",
    includes: [
      "Levantamento e quadro de cargas",
      "Dimensionamento de circuitos e proteções",
      "Memorial de cálculo e descritivo",
      "Lista de materiais",
      "ART de projeto",
    ],
    faqs: [
      { q: "Vocês também executam o projeto?", a: "Sim. Projeto e execução pela mesma equipe facilitam a obra e evitam retrabalho." },
    ],
  },
  {
    slug: "ar-condicionado",
    n: "10", icon: "ac", span: 6,
    title: "Ar-condicionado",
    teaser: "Instalação e manutenção de splits e VRF.",
    desc: "Instalação e manutenção de ar-condicionados residenciais, comerciais e industriais. Split, cassete, janela e VRF. Limpeza, recarga de gás e revisão de componentes.",
    tags: ["Instalação", "Manutenção", "Split", "Limpeza", "VRF"],
    h1: "Instalação e manutenção de ar-condicionado em Salvador",
    metaTitle: "Instalação de ar-condicionado em Salvador",
    metaDescription: "Instalação e manutenção de ar-condicionado em Salvador: split, cassete, janela e VRF. Ponto elétrico dedicado, limpeza, recarga de gás e revisão.",
    intro: "Instalamos o aparelho e a parte elétrica dele, com circuito dedicado e disjuntor correto, o que evita sobrecarga. Também fazemos limpeza, recarga de gás e manutenção de equipamentos residenciais e comerciais.",
    includes: [
      "Instalação de split, cassete, janela e VRF",
      "Ponto elétrico com circuito dedicado",
      "Limpeza e higienização",
      "Recarga de gás",
      "Manutenção preventiva e revisão de componentes",
    ],
    faqs: [
      { q: "Vocês fazem também o ponto elétrico do ar-condicionado?", a: "Sim. Fazemos a instalação completa: ponto elétrico com circuito e disjuntor próprios e a instalação do aparelho." },
    ],
  },
  {
    slug: "cameras-de-seguranca",
    n: "11", icon: "cam", span: 6,
    title: "Câmeras de segurança",
    teaser: "CFTV, câmera IP, DVR/NVR e acesso remoto.",
    desc: "Instalação e configuração de sistemas CFTV, câmeras IP, DVR e NVR. Monitoramento residencial e comercial com acesso remoto pelo celular.",
    tags: ["CFTV", "Câmera IP", "DVR/NVR", "Monitoramento", "Remoto"],
    h1: "Instalação de câmeras de segurança em Salvador",
    metaTitle: "Câmeras de segurança em Salvador",
    metaDescription: "Instalação e configuração de câmeras de segurança em Salvador: CFTV, câmeras IP, DVR e NVR, com acesso remoto pelo celular para casas e empresas.",
    intro: "Instalamos sistemas de câmeras com cabeamento organizado, gravação em DVR ou NVR e acesso pelo celular. Cuidamos também da infraestrutura: eletrodutos, racks e alimentação elétrica.",
    includes: [
      "Instalação de câmeras analógicas e IP",
      "Configuração de DVR e NVR",
      "Acesso remoto pelo celular",
      "Cabeamento e infraestrutura com eletrodutos",
      "Organização de racks de rede",
    ],
    faqs: [
      { q: "Consigo ver as câmeras pelo celular?", a: "Sim. Configuramos o acesso remoto no seu celular e explicamos como usar." },
    ],
  },
  {
    slug: "hidraulica",
    n: "12", icon: "drop", span: 12,
    title: "Hidráulica",
    teaser: "Instalações, reparos e manutenção hidráulica.",
    desc: "Instalações e reparos hidráulicos residenciais e comerciais. Da obra nova ao pequeno reparo, com equipe própria e materiais de qualidade.",
    list: [
      "Instalação de torneiras e registros",
      "Troca de acabamento (válvula, ducha, espelho)",
      "Instalação de vaso sanitário e caixa acoplada",
      "Instalação de pia, cuba e tanque",
      "Bomba pressurizadora para banheiro",
      "Instalação de aquecedor a gás",
      "Reparo de vazamentos e infiltrações",
      "Desentupimento de ralos e tubulações",
      "Instalação de caixa d'água e reservatório",
      "Troca de flexível e sifão",
      "Rede hidráulica para obra nova",
      "Manutenção preventiva hidráulica",
    ],
    tags: ["Residencial", "Comercial", "Reparos", "Obra nova"],
    h1: "Serviços de hidráulica em Salvador",
    metaTitle: "Encanador e hidráulica em Salvador",
    metaDescription: "Serviços hidráulicos em Salvador: instalação de torneiras, registros, vasos e pias, bomba pressurizadora, reparo de vazamentos e desentupimento.",
    intro: "Além da parte elétrica, cuidamos da hidráulica: da troca de uma torneira à rede completa de uma obra nova. Serviços que envolvem as duas áreas, como bomba pressurizadora e aquecedor, ficam com uma equipe só.",
    faqs: [
      { q: "Vocês instalam bomba pressurizadora?", a: "Sim, incluindo a ligação elétrica da bomba." },
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

// ---------------------------------------------------------------- OBRAS
export const OBRAS = [
  { title: "Painel de transferência", meta: "Chave reversora · barramentos", tag: "Quadros", size: "tall", img: "painel-transferencia", pos: "50% 40%" },
  { title: "Quadro de distribuição", meta: "Circuitos identificados · DR", tag: "Quadros", size: "md", img: "qdc-organizado", pos: "50% 45%" },
  { title: "Eletrocalha perfurada", meta: "Corte e montagem em obra", tag: "Infraestrutura", size: "md", img: "eletrocalha-corte", pos: "50% 38%" },
  { title: "Iluminação em perfil de LED", meta: "Linhas de luz embutidas", tag: "Iluminação", size: "md", img: "iluminacao-led", pos: "50% 30%" },
  { title: "Rack de rede e CFTV", meta: "Eletrodutos galvanizados", tag: "Rede · CFTV", size: "md", img: "rack-rede", pos: "50% 18%" },
  { title: "Eletroduto aparente em arena", meta: "Galvanizado · alimentação de painel", tag: "Comercial", size: "md", img: "eletroduto-arena", pos: "50% 42%" },
  { title: "Infraestrutura de iluminação", meta: "Eletroduto e caixas no forro", tag: "Comercial", size: "md", img: "forro-iluminacao", pos: "50% 40%" },
  { title: "Equipe EM em residência", meta: "Instalação em marcenaria", tag: "Residencial", size: "tall", img: "equipe-em-residencial", pos: "50% 30%" },
  { title: "Trabalho em altura", meta: "Andaime e cinto de segurança", tag: "Segurança", size: "md", img: "trabalho-altura", pos: "50% 40%" },
  { title: "Ligação de drivers de LED", meta: "Iluminação residencial", tag: "Residencial", size: "md", img: "drivers-led", pos: "50% 55%" },
  { title: "Distribuição para rack", meta: "Eletroduto aparente em laje", tag: "Infraestrutura", size: "wide", img: "rack-eletrodutos", pos: "50% 33%" },
  { title: "Instalações em drywall", meta: "Eletroduto flexível em parede", tag: "Comercial", size: "wide", img: "drywall-infra", pos: "50% 55%" },
];

// ---------------------------------------------------------------- FAQ GERAL
export const FAQS = [
  { q: "O orçamento tem custo?", a: "Não. A visita técnica e o orçamento detalhado são gratuitos e sem compromisso. Em obras maiores, fazemos o levantamento completo, com planilha de materiais, mão de obra e cronograma." },
  { q: "Vocês emitem ART e laudo técnico?", a: "Emitimos ART e laudo técnico nas obras que exigem responsabilidade técnica documentada, como projetos elétricos, instalações maiores e adequações junto à concessionária." },
  { q: "Vocês desenvolvem projetos elétricos?", a: "Sim. Desenvolvemos projetos elétricos residenciais, comerciais e industriais com memorial de cálculo e todas as especificações técnicas necessárias." },
  { q: "Atendem pequenos serviços?", a: "Sim. Atendemos: instalação de lustres e luminárias, ventiladores de teto, troca de tomadas e interruptores, instalação de chuveiro elétrico, ponto elétrico para ar-condicionado, extensão e novos pontos elétricos, campainha e interfone, sensor de presença, troca de disjuntores e DPS, instalação de tomada USB, reparo de curto-circuito e lâmpada de emergência. Entre em contato e passamos o orçamento." },
  { q: "Trabalham com obra própria ou subempreitam?", a: "Equipe 100% própria, registrada, uniformizada e com NR-10 atualizada. Não terceirizamos mão de obra crítica, é o que garante padrão de execução e responsabilidade técnica." },
  { q: "Quais regiões vocês atendem?", a: "Atendemos Salvador e região metropolitana, como Lauro de Freitas, Camaçari e Simões Filho. Para obras de maior porte, deslocamos a equipe para outras cidades da Bahia mediante orçamento prévio." },
  { q: "Qual o horário de atendimento?", a: "Atendemos de segunda a sábado, das 7h às 17h. Para dúvidas e orçamentos, entre em contato pelo WhatsApp ou e-mail." },
];
