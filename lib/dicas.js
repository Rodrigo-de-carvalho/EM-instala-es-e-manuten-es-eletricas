// Artigos da seção /dicas. Cada um responde uma dúvida que as pessoas
// pesquisam antes de chamar um eletricista e aponta para o serviço ligado.
// Blocos: { h2 } título de seção, { p } parágrafo, { list: [...] } lista.

export const DICAS = [
  {
    slug: "quando-trocar-a-fiacao-de-casa",
    title: "Quando trocar a fiação elétrica de casa? 7 sinais de alerta",
    metaTitle: "Quando trocar a fiação de casa: 7 sinais",
    description:
      "Disjuntor que desarma, tomada quente, cheiro de queimado: veja os sinais de que a fiação da sua casa precisa ser avaliada e por que não vale esperar.",
    date: "2026-10-11",
    minutes: 4,
    service: "instalacoes-eletricas-residenciais",
    body: [
      { p: "A fiação fica escondida nas paredes, então quase ninguém lembra dela até algo dar errado. Fios antigos ou subdimensionados aquecem, ressecam a isolação e aumentam o risco de curto-circuito e incêndio. Estes são os sinais mais comuns de que está na hora de uma avaliação." },
      { h2: "Sinais de que a fiação precisa de atenção" },
      { list: [
        "Disjuntor que desarma com frequência, mesmo sem ligar nada diferente.",
        "Tomadas ou interruptores quentes, escurecidos ou com marcas de queimado.",
        "Cheiro de plástico queimado perto de tomadas, do quadro ou de aparelhos.",
        "Luzes que piscam ou enfraquecem quando um aparelho potente liga, como chuveiro ou micro-ondas.",
        "Pequenos choques ao encostar em aparelhos, torneiras ou no chuveiro.",
        "Imóvel antigo com fios de isolação de pano ou fusíveis no lugar de disjuntores.",
        "Uso de muitos benjamins e extensões porque faltam tomadas.",
      ] },
      { h2: "Reforma e aparelhos novos também pedem revisão" },
      { p: "Uma instalação feita há 20 ou 30 anos foi calculada para outra realidade: menos aparelhos, menos ar-condicionado, chuveiros menos potentes. Se a casa vai passar por reforma ou ganhar aparelhos de maior consumo, vale conferir se a fiação e o quadro aguentam a nova carga antes de fechar as paredes." },
      { h2: "O que não fazer" },
      { p: "Trocar o disjuntor por um maior para ele parar de desarmar é o erro mais perigoso: o disjuntor protege o fio, e um disjuntor acima do que o fio suporta deixa o fio esquentar sem desligar. Emendas com fita isolante dentro da parede e tomadas sem aterramento também escondem problemas em vez de resolvê-los." },
      { h2: "Como é a avaliação" },
      { p: "Na visita, o eletricista olha o quadro, mede tensões, verifica o estado dos fios e das conexões e confere se cada circuito tem o disjuntor e a bitola corretos. Daí sai uma proposta com o que precisa ser trocado agora e o que pode esperar." },
    ],
  },
  {
    slug: "dr-e-dps-o-que-sao",
    title: "DR e DPS: o que são e por que o seu quadro precisa deles",
    metaTitle: "DR e DPS: o que são e para que servem",
    description:
      "Entenda a diferença entre DR e DPS, o que cada um protege e por que eles são exigidos pela norma nas instalações elétricas.",
    date: "2026-10-11",
    minutes: 3,
    service: "quadros-de-distribuicao",
    body: [
      { p: "Muitos quadros de energia têm só disjuntores. Eles são importantes, mas protegem principalmente os fios contra sobrecarga e curto-circuito. Para proteger pessoas e aparelhos existem outros dois dispositivos: o DR e o DPS." },
      { h2: "DR: proteção contra choque" },
      { p: "O DR (dispositivo diferencial residual) compara a corrente que vai e a que volta no circuito. Se parte dela escapa, por exemplo pelo corpo de uma pessoa ou por um fio encostado na carcaça de um aparelho, o DR desliga o circuito em uma fração de segundo." },
      { p: "A norma brasileira de instalações elétricas de baixa tensão (NBR 5410) exige DR nos circuitos de áreas molhadas, como banheiros, cozinhas, lavanderias e áreas externas. A maioria dos DRs tem um botão de teste, e vale apertá-lo de tempos em tempos para confirmar que ele desarma." },
      { h2: "DPS: proteção contra surtos" },
      { p: "O DPS (dispositivo de proteção contra surtos) desvia para o aterramento os picos de tensão causados por raios e manobras na rede. É ele que ajuda a proteger geladeira, televisão, computador e outros aparelhos sensíveis." },
      { p: "Para funcionar, o DPS precisa de um aterramento bem feito. Sem aterramento, ele não tem para onde mandar o surto." },
      { h2: "Meu quadro não tem DR nem DPS. E agora?" },
      { list: [
        "Na maioria dos casos dá para incluir os dois no quadro existente, se houver espaço.",
        "Quando o quadro é antigo ou não tem espaço, a solução é trocar por um quadro novo.",
        "Antes de instalar o DR, é preciso conferir se não há fuga de corrente na instalação; caso contrário ele vai desarmar e apontar o problema.",
      ] },
    ],
  },
  {
    slug: "disjuntor-desarmando-o-que-fazer",
    title: "Disjuntor desarmando toda hora: causas comuns e o que fazer",
    metaTitle: "Disjuntor desarmando: causas e o que fazer",
    description:
      "Por que o disjuntor desarma sozinho, como identificar se é sobrecarga, curto ou fuga de corrente, e o que nunca fazer para resolver.",
    date: "2026-10-11",
    minutes: 3,
    service: "pequenos-servicos-eletricos",
    body: [
      { p: "O disjuntor desarmar não é defeito: é ele fazendo o trabalho dele. O problema é descobrir por que ele está desarmando. As causas mais comuns são estas." },
      { h2: "Causas mais comuns" },
      { list: [
        "Sobrecarga: aparelhos demais ligados no mesmo circuito, como chuveiro, ar-condicionado e ferro de passar ao mesmo tempo.",
        "Curto-circuito: fios encostando por isolação danificada, tomada queimada ou aparelho com defeito. Costuma desarmar na hora, às vezes com estalo.",
        "Fuga de corrente: quando o que desarma é o DR, geralmente há umidade, fio descascado ou aparelho com isolação ruim.",
        "Disjuntor gasto ou mal dimensionado para o circuito.",
      ] },
      { h2: "O que você pode verificar com segurança" },
      { list: [
        "Desligue os aparelhos daquele circuito e religue o disjuntor. Se ele segurar, ligue os aparelhos um por um para ver qual provoca o desarme.",
        "Se desarma logo que liga, mesmo sem nada conectado, pode ser curto na fiação. Deixe desligado e chame um eletricista.",
        "Observe se há cheiro de queimado, tomada escurecida ou aquecimento no quadro.",
      ] },
      { h2: "O que nunca fazer" },
      { p: "Não troque o disjuntor por um de amperagem maior e não prenda a alavanca para ele não desarmar. O disjuntor é dimensionado para a bitola do fio; aumentar o disjuntor sem trocar o fio deixa o fio esquentar sem proteção, e é assim que começam muitos incêndios." },
      { h2: "Quando chamar um eletricista" },
      { p: "Se o desarme continua depois de tirar os aparelhos da tomada, se há sinais de aquecimento ou se o problema é no DR, vale uma avaliação. Na maioria das vezes a solução é simples: separar circuitos, trocar uma tomada danificada ou ajustar o quadro." },
    ],
  },
];

export const getDica = (slug) => DICAS.find((d) => d.slug === slug);
