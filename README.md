# Site CPCS-SP

Site institucional do **CPCS-SP — Centro de Psicologia e Controle do Stress** (Dra. Marilda Lipp), com páginas sobre a clínica, áreas de atuação, cursos, livros, artigos, unidades, contato e uma landing para brasileiros no exterior.

**Cliente:** CPCS-SP (equipe da Dra. Marilda Lipp).

## Stack

- HTML, CSS e JavaScript puros (sem framework, sem build).
- Conteúdo editável em `data/` (`eventos.js`, `livros.js`, `artigos.js`, `galeria.js`) — ver [COMO-ATUALIZAR.md](COMO-ATUALIZAR.md).
- Hospedagem na **Netlify** (`_redirects` define as rotas limpas).

## Rodar localmente

Não há dependências. Basta abrir `index.html` no navegador, ou servir a pasta:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Publicar

```bash
netlify deploy --prod --dir .
```
