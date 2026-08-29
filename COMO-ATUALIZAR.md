# Como atualizar o site do CPCS-SP

Este guia explica, passo a passo, como colocar conteúdo novo no site **sem precisar
saber programar**. Tudo o que muda com frequência (eventos, cursos, artigos, livros
e fotos) fica em arquivos simples dentro da pasta **`data/`**.

> **Regra de ouro:** abra os arquivos com um editor de texto simples
> (Bloco de Notas serve; o VS Code é ainda melhor). Salve sempre no mesmo lugar,
> com o mesmo nome. Depois de salvar, é preciso **publicar** o site de novo
> (quem faz a publicação já sabe o comando; se for você: `netlify deploy --prod --dir .`).

---

## 1. Adicionar um EVENTO ou divulgar um CURSO novo

Arquivo: **`data/eventos.js`**

1. Abra o arquivo. Você vai ver blocos assim:

```
{
  titulo: "Exemplo: Palestra sobre stress no trabalho",
  tipo: "Palestra",
  dia: "12",
  mes: "SET",
  descricao: "Resumo em uma ou duas linhas.",
  local: "São Paulo/SP",
  link: "https://wa.me/5511932152598",
  ativo: true
},
```

2. Copie um bloco inteiro — **da chave `{` até a vírgula depois do `}`**.
3. Cole logo abaixo do último bloco (antes do `]` do final do arquivo).
4. Troque os textos entre aspas pelos dados do seu evento.
   - `tipo` pode ser "Palestra", "Curso" ou "Workshop".
   - `link` é para onde o botão "Saiba mais" leva (pode ser o WhatsApp).
5. Confira que está `ativo: true` e salve.

- O evento aparece automaticamente na **Home** (seção "Eventos e cursos") e na
  página **Cursos** (seção "Próximos eventos").
- Para **tirar** um evento do ar: mude para `ativo: false` (ou apague o bloco).
- Se não houver nenhum evento ativo, a seção da Home **some sozinha** e a página
  Cursos mostra "Sem eventos programados" — não precisa fazer nada.

---

## 2. Escrever um ARTIGO para o blog

Arquivo: **`data/artigos.js`**

1. Copie um bloco de artigo existente (do `{` até a vírgula depois do `}`).
2. Preencha:
   - `id`: apelido único, **sem espaços nem acentos** (ex.: `"sono-e-stress"`).
     Ele vira o endereço da página: `artigo.html?id=sono-e-stress`.
   - `tag`: categoria curta (ex.: "Saúde").
   - `titulo` e `resumo`: o que aparece no cartão da página Artigos.
   - `conteudo`: o texto completo. **Cada parágrafo é um trecho entre aspas,
     separado por vírgula.** Para criar um subtítulo no meio do texto, comece o
     trecho com `## ` (ex.: `"## Primeiro passo"`).
3. Deixe `ativo: true` e salve.

- Artigos **com** texto completo ganham automaticamente o link "Ler artigo →".
- Artigos com `conteudo: []` (vazio) aparecem só como cartão, sem link.

⚠️ Cuidado com aspas dentro do texto: se precisar de aspas no meio de um
parágrafo, use as curvas “assim” — não as retas ("), que fecham o trecho.

---

## 3. Adicionar um LIVRO

Arquivo: **`data/livros.js`**

1. Salve a imagem da capa na pasta **`assets/img/`**
   (ex.: `assets/img/livro-nome-do-livro.jpg`).
2. Copie um bloco de livro, cole na posição desejada (a ordem do arquivo é a
   ordem na página) e preencha `titulo`, `autores`, `descricao` e `capa`.
3. Ainda **sem** a imagem da capa? Deixe `capa: ""` — o site mostra uma capa
   estilizada azul com o título, até você ter o arquivo.

- Isso atualiza a seção "A estante completa" da página **Livros**.
- O carrossel em leque do topo da página Livros e as vitrines da Home são fixos
  no código — quando quiser incluir um livro lá também, peça ao responsável
  técnico (ou à IA que mantém o site).

---

## 4. Adicionar FOTOS à galeria

Arquivo: **`data/galeria.js`**

1. Salve a foto na pasta **`assets/img/`**.
2. Copie um bloco, cole antes do `]` final e preencha:
   - `imagem`: caminho do arquivo (ex.: `"assets/img/congresso-2026.jpg"`).
   - `legenda`: texto curto que aparece sobre a foto (pode deixar `""`).
3. Deixe `ativo: true` e salve.

- A galeria aparece na página **Cursos** (seção "Galeria"). Se não houver fotos
  ativas, a seção some sozinha.

---

## 5. Onde colocar as imagens

- **Todas as imagens novas** vão na pasta **`assets/img/`**.
- Prefira nomes simples, sem espaços nem acentos: `evento-setembro.jpg`,
  `livro-ciclo-vital.jpg`.
- Tamanho bom: até ~1200 px de largura (fotos de celular funcionam; se o site
  ficar lento, reduza a imagem em https://squoosh.app antes de subir).

### Imagens que ainda aguardam o arquivo definitivo do cliente
| O que | Onde salvar (mantendo o nome) |
|---|---|
| Logo do IPCS | `assets/img/logo-ipcs.png` |
| Capa do livro "Prevenção e Intervenção no Ciclo Vital" | `assets/img/livro-prevencao-ciclo-vital.jpg` (e preencher o campo `capa` em `data/livros.js`) |
| Retrato oficial da Dra. Marilda em alta resolução | `assets/img/marilda-lipp-retrato.png` (substituir o atual) |
| Foto "Eu estive no CBTC" em alta resolução | `assets/img/cbtc-individual.png` (substituir o atual) |
| Fotos das unidades Campinas, RJ e Cuiabá | `assets/img/` (avisar o responsável técnico para encaixar nos cartões) |

---

## 6. O que NÃO mexer

- **`styles.css`**, **`site.js`**, **`conteudo.js`** — são o visual e o
  funcionamento do site. Alterações erradas aqui quebram todas as páginas.
- Os arquivos **`.html`** — os textos fixos das páginas moram neles; para mudar
  algo aí, peça ao responsável técnico.
- Dentro dos arquivos da pasta `data/`, mexa **apenas nos textos entre aspas** e
  no `true/false` do campo `ativo`. Não apague chaves `{ }`, colchetes `[ ]`
  nem vírgulas.

**Deu algo errado?** Se depois de salvar uma seção sumir ou a página ficar em
branco, quase sempre é uma vírgula ou aspa perdida no arquivo editado. Desfaça a
última alteração (Ctrl+Z), salve de novo, e recomece copiando um bloco inteiro.
