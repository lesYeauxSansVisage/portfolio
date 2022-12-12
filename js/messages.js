import { backdrop } from "./backdrop.js";

import { createModal } from "./modal.js";

let messages = [];

if (localStorage.getItem("messages")) {
  messages = JSON.parse(localStorage.getItem("messages"));
}

export function createMessageElement(message) {
  const messageEl = document.createElement("div");
  messageEl.classList.add("message-section__message");

  messageEl.innerHTML = `
      <h4>${message.name}</h4>
      <p>${message.message}</p>
  
      <span>${message.email}</span>
    `;

  return messageEl;
}

export function createClearButton() {
  const clearBtn = document.createElement("button");
  clearBtn.innerText = "Limpar todas as mensagens";
  clearBtn.classList.add("message-section__clear-button");
  backdrop.append(clearBtn);

  clearBtn.addEventListener("click", () => {
    creteDeletePopUp();
  });
}

function creteDeletePopUp() {
  const deletePopUp = document.createElement("div");
  deletePopUp.classList.add("delete-popup");

  deletePopUp.innerHTML = `
    <p>Isso irá deletar todas as mensagens e não será possível recuperá-las. Tem certeza?</p>
    <div class="delete-pop__buttons-container">
        <button class="delete-popup__button--confirm" id="clear-confirm">Sim</button>
        <button class="delete-popup__button--refuse" id="clear-refuse">Não</button>
    </div>
  
  `;

  backdrop.append(deletePopUp);

  const deleteBtn = document.querySelector("#clear-confirm");
  const refuseBtn = document.querySelector("#clear-refuse");

  deleteBtn.addEventListener("click", () => {
    clearMessages();

    createModal(
      `<i class="fa-solid fa-check"></i><p>As mensagens foram deletadas com sucesso!</>`
    );

    deletePopUp.remove();
  });

  refuseBtn.addEventListener("click", () => {
    deletePopUp.remove();
  });
}

export function renderMessages() {
  const messagesSection = document.createElement("section");
  messagesSection.classList.add("message-section");

  backdrop.append(messagesSection);

  if (messages.length < 1) {
    messagesSection.innerHTML =
      "<p style='font-size: 1.5rem; text-align: center'>Não há nenhuma mensagem no momento!</p>";

    return;
  }

  messages.forEach((message) => {
    const newMessageEl = createMessageElement(message);

    messagesSection.append(newMessageEl);
  });

  createClearButton();
}

export function addMessage(message) {
  messages.push(message);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("messages", JSON.stringify(messages));
}

function clearMessages() {
  messages = [];
  saveToLocalStorage();
  backdrop.innerHTML = "";
  renderMessages();
}
