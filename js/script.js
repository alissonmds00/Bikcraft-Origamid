// verificar a url atual
const links = document.querySelectorAll(".header-menu a");

function verificarLink(link) {
  const url = document.location.href;
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
  if (elemento) {
    // verifica se os parâmetros no URL são válidos
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function perguntasHover(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  pergunta.setAttribute("aria-expanded", true);
}

perguntas.forEach(perguntasHover);

// Galeria - interativa
const galeria = document.querySelectorAll(".imagens-container img");
const galeriaContainer = document.querySelector(".imagens-container");

function trocarImagem(event) {
  if (matchMedia("(min-width: 1000px)").matches) {
    const imagem = event.currentTarget;
    galeriaContainer.prepend(imagem);
  }
}

function escolherImagem(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(escolherImagem);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
