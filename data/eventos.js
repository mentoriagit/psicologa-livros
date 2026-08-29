/* ============================================================
   AGENDA DE EVENTOS E CURSOS — CPCS-SP
   ============================================================
   Este arquivo alimenta a seção "Eventos e Cursos" da Home e a
   agenda da página Cursos. Instruções completas: COMO-ATUALIZAR.md

   COMO ADICIONAR UM EVENTO:
   1. Copie um bloco entre chaves { ... }, (incluindo a vírgula final)
   2. Cole antes do colchete final ]
   3. Preencha os campos
   4. Deixe  ativo: true  para o evento aparecer no site

   CAMPOS:
   titulo     → nome do evento
   tipo       → "Palestra", "Curso" ou "Workshop"
   dia        → dia do mês (ex.: "12")
   mes        → mês abreviado (ex.: "SET")
   descricao  → resumo em 1 ou 2 linhas
   local      → cidade/endereço ou "Online"
   link       → para onde o botão "Saiba mais" leva
   ativo      → true = aparece no site · false = fica escondido
   ============================================================ */
window.DADOS_EVENTOS = [

  {
    titulo: "Exemplo: Palestra sobre stress no trabalho",
    tipo: "Palestra",
    dia: "00",
    mes: "MÊS",
    descricao: "Troque este texto pela descrição do seu evento e mude ativo para true.",
    local: "São Paulo/SP",
    link: "https://wa.me/5511932152598",
    ativo: false
  },

  {
    titulo: "Exemplo: Curso de formação em TCC",
    tipo: "Curso",
    dia: "00",
    mes: "MÊS",
    descricao: "Troque este texto pela descrição do curso e mude ativo para true.",
    local: "Online",
    link: "https://wa.me/5511932152598",
    ativo: false
  }

];
