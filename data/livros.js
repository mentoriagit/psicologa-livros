/* ============================================================
   ESTANTE DE LIVROS — CPCS-SP (página Livros, seção "A estante completa")
   ============================================================
   Instruções completas: COMO-ATUALIZAR.md

   COMO ADICIONAR UM LIVRO:
   1. Coloque a imagem da capa na pasta do site ou em assets/img/
   2. Copie um bloco entre chaves { ... }, e cole onde quiser na lista
      (a ordem aqui é a ordem na página)
   3. Preencha os campos e deixe  ativo: true

   CAMPOS:
   titulo    → título do livro
   autores   → autores como devem aparecer
   descricao → resumo em 1 ou 2 linhas
   capa      → caminho da imagem da capa. Se ainda não tiver a capa,
               deixe "" (o site mostra uma capa estilizada com o título)
   ativo     → true = aparece no site · false = fica escondido

   HISTÓRICO (rodada de ajustes 2026-08, feedback do cliente):
   · REMOVIDO "O Stress do Professor" — não é de autoria da Dra. Marilda Lipp
   · "O Stress": capa antiga substituída (era de outra edição) — a segunda
     autora é Lucia Emmanuel Novaes; aguardando foto da capa correta
   · Autores corrigidos: Psicoterapias Breves nos Diferentes Estágios
     Evolutivos; Relacionamentos Interpessoais no Século XXI (Sinopsys);
     Como Enfrentar o Stress
   · INCLUÍDO "Prevenção e Intervenção no Ciclo Vital" (capa roxa)

   RODADA 2026-08-17 (feedback do cliente via WhatsApp):
   · CAPAS REAIS baixadas dos sites oficiais (marildalipp.com.br, Sinopsys,
     Casa do Psicopedagogo) substituindo capas recriadas por IA que traziam
     AUTORES ERRADOS impressos (ex.: "Silvana C. Moreira | Içami Tiba" em
     Crianças Estressadas; "Vera Lúcia Trevisan" em Relacionamentos;
     "José Neander Abreu Serrano" em Psicoterapias Breves) — NUNCA usar
     capa gerada por IA: ela inventa nomes de autores.
   · Autores corrigidos/completados: Prevenção e Intervenção no Ciclo Vital
     (4 organizadoras por extenso), Stress ao Longo da Vida (3º autor é
     Lucio Emmanuel Novais, não "Nunes"), Crianças Estressadas
     (Marilda Novaes Lipp org. — Içami Tiba NÃO é autor, era invenção da IA).
   ============================================================ */
window.DADOS_LIVROS = [

  {
    titulo: "Terapia Racional-Emotiva Comportamental na Teoria e na Prática Clínica",
    autores: "Marilda Lipp · Tátila M. Lopes · Gabriela F. Spadari",
    descricao: "Fundamentos, técnicas e casos clínicos da TREC — uma das abordagens que deram origem à terapia cognitivo-comportamental moderna.",
    capa: "livro-trec.jpg",
    ativo: true
  },
  {
    titulo: "Regulação Emocional: É Possível Aprender?",
    autores: "Marilda Lipp · Gabriela F. Spadari",
    descricao: "A ciência de reconhecer, compreender e regular as próprias emoções — uma habilidade que se treina em qualquer idade.",
    capa: "livro-regulacao-emocional.png",
    ativo: true
  },
  {
    titulo: "Prevenção e Intervenção no Ciclo Vital",
    autores: "Orgs. Marilda Novaes Lipp · Angela Donato Oliva · Lucia E. Novaes Malagris · Valquíria A. Cintra Tricoli (Artmed)",
    descricao: "A visão das terapias cognitivas e comportamentais — o estado da arte da TCC brasileira, da infância à maturidade.",
    capa: "livro-prevencao-ciclo-vital.jpg",
    ativo: true
  },
  {
    titulo: "Stress e o Turbilhão da Raiva",
    autores: "Marilda Emmanuel Novaes Lipp",
    descricao: "Por que explodimos — e como transformar a raiva em respostas firmes e equilibradas, sem desgastar a saúde e os vínculos.",
    capa: "livro-turbilhao-raiva.jpg",
    ativo: true
  },
  {
    titulo: "Pressão Alta e Stress: O Que Fazer Agora?",
    autores: "Marilda Lipp · João Carlos Rocha",
    descricao: "O elo entre emoções e hipertensão, com orientações práticas para proteger o coração no dia a dia.",
    capa: "livro-pressao-alta.jpg",
    ativo: true
  },
  {
    titulo: "Como Enfrentar o Stress",
    autores: "Marilda Novaes Lipp e colaboradoras",
    descricao: "Um convite direto ao leitor: entender os sinais do corpo e agir antes que o stress vire exaustão. 5ª edição, Ícone Editora.",
    capa: "livro-como-enfrentar-o-stress.png",
    ativo: true
  },
  {
    titulo: "O Stress Está Dentro de Você",
    /* capa em alta qualidade enviada pelo cliente em 2026-08-17 (20h36) */
    autores: "Dra. Marilda Lipp (org.)",
    descricao: "Uma leitura essencial para entender como o stress nasce da nossa interpretação do mundo — e como mudá-la.",
    capa: "livro-stress-dentro-de-voce.jpg",
    ativo: true
  },
  {
    titulo: "Crianças Estressadas: Causas, Sintomas e Soluções",
    autores: "Marilda E. Novaes Lipp",
    descricao: "O stress também atinge os pequenos. Como reconhecer os sinais e ajudar crianças a crescer com equilíbrio emocional.",
    capa: "livro-criancas-estressadas.jpg",
    ativo: true
  },
  {
    titulo: "Relaxamento para Todos: Controle o Seu Stress",
    autores: "Marilda Lipp",
    descricao: "Técnicas de relaxamento e respiração explicadas passo a passo, para praticar em casa e reduzir a tensão diária.",
    capa: "livro-relaxamento-para-todos.jpg",
    ativo: true
  },
  {
    titulo: "Como Enfrentar o Stress Infantil",
    autores: "Marilda Novaes Lipp e colaboradores",
    descricao: "Orientações práticas para pais e educadores reconhecerem e aliviarem o stress na infância.",
    /* capa enviada pelo cliente em 2026-08-17 (Ícone, Biblioteca IPCS) */
    capa: "livro-stress-infantil.jpg",
    ativo: true
  },
  {
    titulo: "Mecanismos Neuropsicofisiológicos do Stress",
    autores: "Org. Marilda Lipp",
    descricao: "A base científica do stress: como corpo e cérebro reagem — e o que isso significa para a prática clínica.",
    capa: "livro-mecanismos-stress.webp",
    ativo: true
  },
  {
    titulo: "O Stress — Mitos e Verdades",
    autores: "Marilda Novaes Lipp · Lucia Emmanuel Novaes",
    descricao: "Uma introdução direta ao tema: o que é o stress, como ele surge e como enfrentá-lo no dia a dia.",
    /* Capa: foto da edição correta (série Mitos & Verdades, Ed. Contexto)
       enviada pelo cliente em 2026-08-17. A antiga livro-o-stress.jpg era
       de outra edição e segue fora do site. */
    capa: "livro-o-stress-mitos-verdades.jpg",
    ativo: true
  },
  {
    titulo: "O Stress e a Beleza da Mulher",
    autores: "Marilda Lipp",
    descricao: "Como o stress se reflete na saúde e na aparência da mulher — e o que fazer para se cuidar por inteiro.",
    capa: "livro-stress-beleza-mulher.jpg",
    ativo: true
  },
  {
    titulo: "Pesquisas Sobre Stress no Brasil",
    autores: "Org. Marilda Lipp",
    descricao: "Panorama da pesquisa brasileira sobre stress: saúde, ocupações e grupos de risco.",
    capa: "livro-pesquisas-stress-brasil.jpg",
    ativo: true
  },
  {
    titulo: "Stress, Hipertensão Arterial e Qualidade de Vida",
    autores: "Lipp · Rocha",
    descricao: "O elo entre stress e hipertensão arterial, com foco em prevenção e qualidade de vida.",
    capa: "livro-stress-hipertensao.jpg",
    ativo: true
  },
  {
    titulo: "Stress ao Longo da Vida",
    autores: "Marilda Emmanuel Novaes Lipp · Lucia Emmanuel Novaes Malagris · Lúcio Emmanuel Novais",
    descricao: "Da infância à maturidade: como o stress se transforma em cada fase da vida — e como cuidar dele a tempo.",
    capa: "livro-stress-ao-longo-da-vida.jpg",
    ativo: true
  },
  {
    titulo: "Relacionamentos Interpessoais no Século XXI e o Stress Emocional",
    autores: "Orgs. Marilda Lipp · Valquíria C. Tricoli",
    descricao: "Vínculos, tecnologia e pressa: o impacto das relações modernas sobre as emoções e o equilíbrio.",
    /* capa em alta qualidade enviada pelo cliente em 2026-08-17 */
    capa: "livro-relacionamentos-stress.jpg",
    ativo: true
  },
  {
    titulo: "O Treino Cognitivo de Controle da Raiva",
    autores: "Lipp · Malagris",
    descricao: "O passo a passo do tratamento cognitivo para transformar a raiva em resposta firme e equilibrada.",
    capa: "livro-treino-controle-raiva.jpg",
    ativo: true
  },
  {
    titulo: "Psicoterapias Breves nos Diferentes Estágios Evolutivos",
    autores: "Orgs. Marilda Emmanuel Novaes Lipp · Elisa Medici Pizão Yoshida",
    descricao: "Diferentes enfoques de psicoterapia breve, organizados para orientar a prática clínica.",
    capa: "livro-psicoterapias-breves.jpg",
    ativo: true
  },
  {
    titulo: "O Adolescente e Seus Dilemas",
    autores: "Org. Marilda Lipp",
    descricao: "Orientação para pais e educadores sobre os desafios emocionais da adolescência.",
    capa: "livro-adolescente-dilemas.jpg",
    ativo: true
  }

];
