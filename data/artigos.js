/* ============================================================
   ARTIGOS DO BLOG — CPCS-SP
   ============================================================
   Este arquivo alimenta a página Artigos e as páginas de leitura.
   Instruções completas: COMO-ATUALIZAR.md

   COMO ADICIONAR UM ARTIGO:
   1. Copie um bloco entre chaves { ... }, e cole antes do ] final
   2. Preencha os campos. No campo "conteudo", cada trecho entre
      aspas é um parágrafo. Para criar um subtítulo dentro do texto,
      comece o trecho com "## " (ex.: "## Primeiro passo").
   3. Deixe  ativo: true

   CAMPOS:
   id        → apelido único do artigo, sem espaços nem acentos
               (vira o endereço da página: artigo.html?id=apelido)
   tag       → categoria curta (ex.: "Saúde", "Família")
   titulo    → título do artigo
   resumo    → chamada de 1 ou 2 linhas exibida no cartão
   autor     → quem assina (ex.: "Equipe CPCS-SP")
   tempo     → tempo de leitura (ex.: "5 min de leitura")
   conteudo  → lista de parágrafos do texto completo.
               Se deixar vazia [], o cartão aparece sem link de leitura.
   ativo     → true = aparece no site · false = fica escondido
   ============================================================ */
window.DADOS_ARTIGOS = [

  {
    id: "12-sessoes-tcs",
    tag: "Método",
    titulo: "O que acontece nas 12 sessões do Treino de Controle do Stress",
    resumo: "Da avaliação inicial à alta: um passeio pelas etapas do método TCS e pelo que muda em cada fase do programa.",
    autor: "Equipe CPCS-SP",
    tempo: "8 min de leitura",
    conteudo: [
      "Quem chega ao CPCS-SP costuma trazer a mesma dúvida: \"como um programa de 12 sessões pode dar conta de algo tão grande quanto o meu stress?\". A resposta está na estrutura. O Treino de Controle do Stress (TCS), criado pela Prof. Dra. Marilda Lipp, não é uma terapia de duração indefinida: é um programa com começo, meio e fim, em que cada sessão tem um objetivo claro.",
      "## Antes de tudo: a avaliação",
      "O programa começa com uma avaliação estruturada. Em entrevista clínica, e com o apoio de instrumentos validados como o ISSL (Inventário de Sintomas de Stress para Adultos), a psicóloga identifica em que fase do stress você está — alerta, resistência, quase-exaustão ou exaustão —, quais são as principais fontes de tensão e como o seu corpo e as suas emoções vêm respondendo a elas.",
      "Essa fotografia inicial importa por dois motivos: ela orienta o plano das sessões seguintes e serve de régua para medir a evolução. Ao final do programa, é possível comparar o antes e o depois com dados, não apenas com impressões.",
      "## As quatro áreas do treino",
      "As sessões seguintes trabalham, de forma prática, os quatro pilares do método. Alimentação: repor o que o stress consome e sustentar o corpo na recuperação. Relaxamento: técnicas de respiração e relaxamento profundo que reduzem a tensão física e mental — e que você treina até que se tornem recurso seu, disponível em qualquer situação. Exercício físico: o movimento como aliado do equilíbrio, ajustado à sua rotina real. Reestruturação cognitiva: a parte mais transformadora do processo, em que você aprende a identificar e modificar o modo estressante de pensar, sentir e agir, com técnicas da terapia cognitivo-comportamental.",
      "Nada disso acontece de forma teórica. A cada semana há prática na sessão e tarefas curtas para o dia a dia, porque o objetivo não é entender o stress — é mudar a forma como você responde a ele.",
      "## O papel do biofeedback",
      "Em vários momentos do programa, o biofeedback entra como um espelho do corpo: sensores mostram, em tempo real, como a sua respiração, a tensão muscular e outros sinais respondem ao stress e ao relaxamento. Ver o próprio corpo se acalmando na tela acelera o aprendizado e dá uma confiança que a palavra sozinha não dá.",
      "## O fim que é começo",
      "As sessões finais são de consolidação: revisar o que funcionou, planejar como manter os novos hábitos e preparar a autonomia. A meta do TCS não é criar dependência da terapia, e sim entregar a você um repertório que permanece — o seu nível ótimo de stress, sustentado pelas suas próprias ferramentas.",
      "Se você se reconheceu em alguma fase do stress, uma avaliação estruturada é o primeiro passo. A equipe do CPCS-SP atende presencialmente em São Paulo e online."
    ],
    ativo: true
  },

  {
    id: "biofeedback",
    tag: "Tecnologia",
    titulo: "Biofeedback: quando o corpo aprende a se acalmar",
    resumo: "Sensores que mostram em tempo real como o corpo responde ao stress — e como isso acelera o aprendizado do relaxamento.",
    autor: "Equipe CPCS-SP",
    tempo: "5 min de leitura",
    conteudo: [
      "Respire fundo. Relaxe. Quem vive sob stress já ouviu esses conselhos dezenas de vezes — e sabe que, na prática, eles são mais difíceis do que parecem. O biofeedback existe exatamente para atravessar essa distância entre saber o que fazer e conseguir fazer.",
      "## O que é, afinal",
      "Biofeedback é uma técnica em que sensores — colocados na pele, sem dor e sem invasão — medem sinais do corpo que normalmente passam despercebidos: ritmo da respiração, frequência cardíaca, tensão muscular, temperatura das mãos, sudorese. Esses sinais aparecem na tela em tempo real, na forma de gráficos ou animações.",
      "De repente, o invisível fica visível: você vê o seu corpo reagindo a um pensamento estressante — e vê, também, o efeito imediato de uma respiração bem feita.",
      "## Por que acelera o aprendizado",
      "Quando a pessoa tenta relaxar \"no escuro\", ela não tem como saber se está no caminho certo. Com o biofeedback, cada pequeno acerto recebe confirmação instantânea: a curva desce, a animação responde, o corpo confirma. Esse retorno imediato transforma o relaxamento em uma habilidade treinável, como aprender a andar de bicicleta — o corpo entende antes da cabeça.",
      "Com a repetição, o cérebro associa a técnica à resposta de calma, e o que começou na tela passa a funcionar sem ela: no trânsito, antes de uma reunião difícil, na noite de sono que não vinha.",
      "## Como usamos no CPCS-SP",
      "No CPCS-SP, o biofeedback não é um tratamento isolado: ele integra o Treino de Controle do Stress (TCS) e os atendimentos de terapia cognitivo-comportamental, como ferramenta para treinar o pilar do relaxamento e para mostrar, com dados, a evolução do paciente ao longo das sessões.",
      "É ciência a serviço de uma coisa muito simples: devolver a você o comando do seu próprio corpo. Se quiser experimentar, fale com a nossa equipe e agende uma avaliação."
    ],
    ativo: true
  },

  {
    id: "burnout",
    tag: "Trabalho",
    titulo: "Burnout não é frescura: como o stress ocupacional evolui",
    resumo: "Os sinais silenciosos do esgotamento no trabalho, e por que agir na fase de resistência evita meses de recuperação.",
    autor: "Equipe CPCS-SP",
    tempo: "6 min de leitura",
    conteudo: [],
    ativo: true
  },

  {
    id: "regulacao-emocional",
    tag: "Emoções",
    titulo: "Regulação emocional: a habilidade que ninguém nos ensinou",
    resumo: "Emoções não se controlam por força de vontade — se regulam com técnica. O que a ciência diz sobre aprender isso na vida adulta.",
    autor: "Equipe CPCS-SP",
    tempo: "5 min de leitura",
    conteudo: [],
    ativo: true
  },

  {
    id: "stress-infantil",
    tag: "Família",
    titulo: "Crianças também se estressam — e os sinais são diferentes",
    resumo: "Irritação, dores de barriga e queda no rendimento escolar podem ser stress infantil. Como identificar e ajudar.",
    autor: "Equipe CPCS-SP",
    tempo: "7 min de leitura",
    conteudo: [],
    ativo: true
  },

  {
    id: "pressao-alta",
    tag: "Saúde",
    titulo: "Pressão alta e emoções: o elo que a cardiologia reconhece",
    resumo: "Como o stress crônico participa da hipertensão e o que o cuidado psicológico pode fazer pela saúde do coração.",
    autor: "Equipe CPCS-SP",
    tempo: "6 min de leitura",
    conteudo: [],
    ativo: true
  }

];
