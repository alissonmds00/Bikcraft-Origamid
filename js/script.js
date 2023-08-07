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

// Galeria
const galeria = document.querySelectorAll(".imagens-container img");
const imagemPrincipal = document.querySelector("#imagem-principal");

function trocarImagem(event) {
  const imagem = event.currentTarget;
  const imagemAnterior = imagemPrincipal.src
  const url = imagem.src;
  imagem.src = imagemAnterior
  imagemPrincipal.src = url
}

function escolherImagem(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

galeria.forEach(escolherImagem);
