// verificar a url atual
const links = document.querySelectorAll(".header-menu a");
const url = document.location.href;

function verificarLink(link) {
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(verificarLink);

// Verificar o seguro selecionado
const parametros = new URLSearchParams(location.search); // comando que separa os parâmetros pelas palavras chave

function ativarProduto(parametro) {
  const elemento = document.querySelector(`#${parametro}`);
  if (elemento) { // verifica se os parâmetros no URL são válidos
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
console.log(parametros);
