/* ============================================================
   CPCS-SP — script compartilhado por todas as páginas
   1. Menu hambúrguer
   2. Animações de scroll: GSAP + ScrollTrigger (CDN), com
      fallback por IntersectionObserver se o CDN falhar
   3. prefers-reduced-motion desativa todas as animações
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Menu hambúrguer ---------- */
  var burger = document.getElementById("hamburger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- 2. Animações de scroll ---------- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* Em celular/tablet o site fica 100% estático: nada se move ao
     arrastar o dedo (sem reveal, parallax, zoom nem contadores). */
  var mobile = window.matchMedia("(max-width:920px)").matches;
  if (reduced || mobile) return;

  var doc = document.documentElement;

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    /* .js esconde os .reveal (estado inicial via CSS);
       .gsap-on desativa a transição CSS para o GSAP assumir */
    doc.classList.add("js", "gsap-on");

    /* Fade + translateY discreto (26px). Elementos que entram na
       viewport juntos (grids) ganham stagger de 0.08s. */
    ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          overwrite: true
        });
      }
    });

    /* Parallax leve (máx. 15%) — apenas no hero e apenas em telas
       maiores: em celular fica desligado para nunca pesar o scroll */
    var hero = document.querySelector(".home-hero, .page-hero, .ext-hero");
    if (hero && window.matchMedia("(min-width:921px)").matches) {
      var alvos = hero.querySelectorAll(".book-fan, .hero-blob, .hero-blob2");
      if (alvos.length) {
        gsap.to(alvos, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
        });
      }
    }

    /* Fotos de seção entram com um zoom-out sutil */
    gsap.utils.toArray(".split-photo img, .eliana-photo img, .unit-photo img").forEach(function (img) {
      gsap.fromTo(img, { scale: 1.08 }, {
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: img, start: "top 85%", once: true }
      });
    });

    /* Números que contam ao entrar na tela: <b data-contar="20">20</b>
       (sufixo opcional via data-sufixo) */
    gsap.utils.toArray("[data-contar]").forEach(function (el) {
      var fim = parseFloat(el.getAttribute("data-contar"));
      if (isNaN(fim)) return;
      var sufixo = el.getAttribute("data-sufixo") || "";
      var obj = { v: 0 };
      gsap.to(obj, {
        v: fim,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: function () { el.textContent = Math.round(obj.v) + sufixo; }
      });
    });

    window.addEventListener("load", function () { ScrollTrigger.refresh(); });
    return;
  }

  /* ---------- Fallback sem GSAP: IntersectionObserver ---------- */
  if (!("IntersectionObserver" in window)) return;
  doc.classList.add("js");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
