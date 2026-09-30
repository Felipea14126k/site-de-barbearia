/* ============================================================
   O&I — Barbearia Oak & Iron
   script.js — Navegação suave via data-alvo
   ============================================================ */

// Todos os botões (e elementos) com [data-alvo] rolam a página
// suavemente até a seção indicada, sem alterar a URL.
document.querySelectorAll("[data-alvo]").forEach(function (botao) {
  botao.addEventListener("click", function () {
    var seletor = botao.getAttribute("data-alvo");
    var secao = seletor ? document.querySelector(seletor) : null;

    if (secao) {
      secao.scrollIntoView({ behavior: "smooth" });
    }
  });
});
