const form = document.querySelector("#formMensagem");
const input = document.querySelector("#mensagem");
const lista = document.querySelector("#lista");

let editando = null;

// quando apertar Enter no formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  adicionar();
});

function adicionar() {
  const texto = input.value.trim();
  if (texto === "") return;

  if (editando !== null) {
    // se estiver editando, troca o texto
    lista.children[editando].querySelector("span").textContent = texto;
    editando = null;
  } else {
    // cria novo item
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texto;
    span.style.cursor = "pointer";

    // clicar no texto para editar
    span.addEventListener("click", () => {
      input.value = span.textContent;
      editando = Array.from(lista.children).indexOf(li);
    });

    // botão excluir
    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.addEventListener("click", () => {
      li.remove();
      editando = null;
    });

    li.append(span, excluirBtn);
    lista.append(li);
  }

  input.value = "";
}

window.adicionar = adicionar;
