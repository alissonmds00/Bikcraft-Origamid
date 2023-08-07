const formulario = document.querySelector("form");

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";
  const data = new FormData(formulario);
  // console.log(data.get("email"));
  fetch("./enviar", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      '<p class="font-2-24" style="grid-column:1/-1; padding: 1.6rem; border-radius: 4px; background #f7f7f7"><span style="color: #317A00">Formulário enviado</span> com sucesso!';
  } else {
    formulario.innerHTML =
      '<p class="font-2-24" style="grid-column:1/-1; padding: 1.6rem; border-radius: 4px; background #f7f7f7"><span style="color: #E00000">Erro.</span> O formulário não pôde ser enviado.</p>';
  }
}

formulario.addEventListener("submit", enviarFormulario);
