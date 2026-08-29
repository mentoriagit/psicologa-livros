/* ============================================================
   CPCS-SP — renderizador do conteúdo editável (data/*.js)
   ============================================================
   Este arquivo lê as listas de data/eventos.js, data/galeria.js,
   data/artigos.js e data/livros.js e monta os cartões na página.
   O CLIENTE NÃO PRECISA MEXER AQUI — para atualizar o site, edite
   apenas os arquivos da pasta data/ (ver COMO-ATUALIZAR.md).
   ============================================================ */
(function () {
  "use strict";

  function esc(t) {
    var d = document.createElement("div");
    d.textContent = t == null ? "" : String(t);
    return d.innerHTML;
  }
  var PINO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';

  /* ---------- EVENTOS (Home + página Cursos) ---------- */
  function cardEvento(ev) {
    return '<article class="event-card reveal">' +
      '<div class="event-top">' +
        '<span class="event-tag">' + esc(ev.tipo || "Evento") + '</span>' +
        '<div class="event-date" aria-label="Data do evento"><b>' + esc(ev.dia || "") + '</b><span>' + esc(ev.mes || "") + '</span></div>' +
      '</div>' +
      '<h3>' + esc(ev.titulo) + '</h3>' +
      '<p>' + esc(ev.descricao || "") + '</p>' +
      '<div class="event-place">' + PINO + esc(ev.local || "") + '</div>' +
      '<a class="btn btn-ghost event-btn" href="' + esc(ev.link || "contato.html") + '" target="_blank" rel="noopener">Saiba mais</a>' +
    '</article>';
  }
  var eventos = (window.DADOS_EVENTOS || []).filter(function (e) { return e && e.ativo; });

  var gridCursos = document.getElementById("eventosGrid");
  var vazio = document.getElementById("eventosVazio");
  if (gridCursos) {
    if (eventos.length) {
      gridCursos.innerHTML = eventos.map(cardEvento).join("");
    } else {
      gridCursos.hidden = true;
      if (vazio) vazio.hidden = false;
    }
  }

  var secHome = document.getElementById("eventosHome");
  var gridHome = document.getElementById("eventosHomeGrid");
  if (secHome && gridHome && eventos.length) {
    gridHome.innerHTML = eventos.slice(0, 3).map(cardEvento).join("");
    secHome.hidden = false;
  }

  /* ---------- GALERIA (página Cursos) ---------- */
  var fotos = (window.DADOS_GALERIA || []).filter(function (f) { return f && f.ativo && f.imagem; });
  var secGal = document.getElementById("galeria");
  var gridGal = document.getElementById("galeriaGrid");
  if (secGal && gridGal && fotos.length) {
    gridGal.innerHTML = fotos.map(function (f) {
      return '<figure class="reveal"><img src="' + esc(f.imagem) + '" alt="' + esc(f.legenda || "Foto do CPCS-SP") + '" loading="lazy">' +
        (f.legenda ? '<figcaption>' + esc(f.legenda) + '</figcaption>' : '') + '</figure>';
    }).join("");
    secGal.hidden = false;
  }

  /* ---------- LIVROS (página Livros) ---------- */
  var livros = (window.DADOS_LIVROS || []).filter(function (l) { return l && l.ativo; });
  var gridLivros = document.getElementById("livrosGrid");
  if (gridLivros && livros.length) {
    gridLivros.innerHTML = livros.map(function (l) {
      var capa;
      if (l.capa) {
        capa = '<div class="book-cover"><img src="' + esc(l.capa) + '" alt="Capa do livro ' + esc(l.titulo) + '" loading="lazy"></div>';
      } else {
        /* sem arquivo de capa: usa a capa estilizada do site */
        capa = '<div class="book-cover stylized st-amber">' +
          '<span class="pub">Biblioteca IPCS</span>' +
          '<span class="ttl">' + esc(l.titulo) + '</span>' +
          '<span class="aut">' + esc(l.autores || "") + '</span></div>';
      }
      return '<article class="book-item reveal">' + capa +
        '<h3>' + esc(l.titulo) + '</h3>' +
        '<span class="authors">' + esc(l.autores || "") + '</span>' +
        '<p>' + esc(l.descricao || "") + '</p></article>';
    }).join("");
  }

  /* ---------- ARTIGOS: grade (página Artigos) ---------- */
  var artigos = (window.DADOS_ARTIGOS || []).filter(function (a) { return a && a.ativo; });
  var gridArt = document.getElementById("artigosGrid");
  if (gridArt && artigos.length) {
    gridArt.innerHTML = artigos.map(function (a) {
      var completo = a.conteudo && a.conteudo.length;
      var abre = completo ? '<a class="article-card reveal" href="artigo.html?id=' + encodeURIComponent(a.id) + '">' : '<article class="article-card reveal">';
      var fecha = completo ? '</a>' : '</article>';
      return abre +
        '<span class="tag">' + esc(a.tag || "") + '</span>' +
        '<h3>' + esc(a.titulo) + '</h3>' +
        '<p>' + esc(a.resumo || "") + '</p>' +
        '<div class="meta"><span>' + esc(a.autor || "") + '</span><span>' +
          (completo ? 'Ler artigo →' : esc(a.tempo || "")) + '</span></div>' +
        fecha;
    }).join("");
  }

  /* ---------- ARTIGO: página de leitura (artigo.html?id=…) ---------- */
  var corpoArt = document.getElementById("artigoCorpo");
  if (corpoArt) {
    var id = new URLSearchParams(location.search).get("id");
    var art = artigos.filter(function (a) { return a.id === id; })[0];
    if (art && art.conteudo && art.conteudo.length) {
      document.title = art.titulo + " — CPCS-SP";
      var elTag = document.getElementById("artigoTag");
      var elTitulo = document.getElementById("artigoTitulo");
      var elMeta = document.getElementById("artigoMeta");
      var elMigalha = document.getElementById("artigoMigalha");
      if (elTag) elTag.textContent = art.tag || "Artigo";
      if (elTitulo) elTitulo.textContent = art.titulo;
      if (elMeta) elMeta.textContent = (art.autor || "Equipe CPCS-SP") + " · " + (art.tempo || "");
      if (elMigalha) elMigalha.textContent = art.titulo;
      corpoArt.innerHTML = art.conteudo.map(function (p) {
        if (typeof p === "string" && p.indexOf("## ") === 0) {
          return "<h2>" + esc(p.slice(3)) + "</h2>";
        }
        return "<p>" + esc(p) + "</p>";
      }).join("");
    } else {
      /* id não encontrado: volta para a lista */
      corpoArt.innerHTML = '<p>Artigo não encontrado. <a href="artigos.html" style="text-decoration:underline">Voltar para a lista de artigos</a>.</p>';
    }
  }
})();
