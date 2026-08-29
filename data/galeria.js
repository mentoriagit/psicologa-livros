/* ============================================================
   GALERIA DE FOTOS — CPCS-SP
   ============================================================
   Este arquivo alimenta a galeria da página Cursos (seção "Galeria").
   Instruções completas: COMO-ATUALIZAR.md

   COMO ADICIONAR UMA FOTO:
   1. Coloque o arquivo da foto na pasta  assets/img/
   2. Copie um bloco entre chaves { ... }, e cole antes do ] final
   3. Escreva o caminho da imagem e uma legenda curta
   4. Deixe  ativo: true

   CAMPOS:
   imagem   → caminho do arquivo (ex.: "assets/img/minha-foto.jpg")
   legenda  → texto curto exibido sobre a foto (pode deixar "")
   ativo    → true = aparece no site · false = fica escondida
   ============================================================ */
window.DADOS_GALERIA = [

  {
    imagem: "assets/img/congresso-ipcs.png",
    legenda: "Equipe do IPCS no IX Congresso Brasileiro de Stress",
    ativo: true
  },

  {
    imagem: "assets/img/cbtc-individual.png",
    legenda: "Eu estive no CBTC — Congresso Brasileiro de Terapias Cognitivas",
    ativo: true
  },

  {
    imagem: "assets/img/eliana-marilda.jpg",
    legenda: "Dra. Eliana Torrezan e Prof. Dra. Marilda Lipp em congresso da FBTC",
    ativo: true
  },

  {
    imagem: "assets/img/consultorio-01.jpg",
    legenda: "Consultório do CPCS-SP, na Av. Brigadeiro Faria Lima",
    ativo: true
  }

];
