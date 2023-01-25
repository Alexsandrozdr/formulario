const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

const progress = document.querySelector("#progress");

const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector(".modal-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Check if the name is empty
  // Verifica se o nome está vazio
  if (nameInput.value === "") {
    showModal("Por favor, preencha o seu nome");
    return;
  }
  // Checks if the email is filled in and if it is valid
  // Verifica se o e-mail está preenchido e se é válido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    showModal("Por favor, preencha o seu email");
    return;
  }
  // Check if the is filled
  // Verifica se a está preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    showModal("A senha precisa ser no mínimo 8 dígitos.");
    return;
  }

  //   Verificar se a situação foi selecionada
  if (jobSelect.value === "") {
    showModal("Por favor, selecione a sua situação");
    return;
  }
  // Check if the situation was selected
  // Verifica se a mensagem está preenchida
  if (messageTextarea.value === "") {
    showModal("Por favor, escreva uma mensagem");
    return;
  }
  // If all fields are correctly filled in, send the form.
  // Se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();

  progress.value = 0;
});

// Function that validates email
// Função que valida e-mail

function isEmailValid(email) {
  // create a regex to validate email
  // cria uma regex para validar email
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}
// Function that validates the password
// Função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    // valid password
    //  Senha válida
    return true;
  }
  // invalid password
  // Senha inválida
  return false;
}
// Updates the progress bar when filling out the form
// Atualiza a barra de progresso ao preencher o formulário
form.addEventListener("input", () => {
  const totalFields = form.elements.length - 1;
  let completedFields = 0;
  // Counts the number of filled fields
  // Conta o número de campos preenchidos
  for (let i = 0; i < totalFields; i++) {
    if (form.elements[i].value) {
      completedFields++;
    }
  }
  // Update progress bar value
  // Atualiza o valor da barra de progresso
  progress.value = (completedFields / totalFields) * 100;
});
// show modal
// Exibir modal
function showModal(msg) {
  modalMessage.textContent = msg;
  modal.style.display = "block";
}
// close modal
// Fechar modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
