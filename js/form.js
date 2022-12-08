import createMessage from "./constructors/message.js";
import { backdrop } from "./backdrop.js";

export const form = document.querySelector("#message-form");

export const seeMessagesBtn = document.querySelector("#see-messages");

export const clearMessagesBtn = document.querySelector("#clear");

let messages = [createMessage("Name", "Email", "This is an examwple")];

if (localStorage.getItem("messages")) {
  messages = JSON.parse(localStorage.getItem("messages"));
}

export function formListener(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!name || !email || !message) {
    return;
  }

  const newMessage = createMessage(name, email, message);

  messages.push(newMessage);

  saveToLocalStorage();

  form.reset();
}

export function clearMessagesBtnListener() {
  if (
    window.confirm("Você tem certeza que deseja deletar todas as mensagens? ")
  ) {
    messages.length = 0;
    saveToLocalStorage();
  }
}

export function seeMessagesBtnListener() {
  backdrop.classList.add("active");

  const messagesSection = document.createElement("section");
  messagesSection.classList.add("message-section");

  backdrop.append(messagesSection);

  messages.forEach((message) => {
    const newMessageEl = createMessageElement(message);

    messagesSection.append(newMessageEl);
  });
}

function createMessageElement(message) {
  const messageEl = document.createElement("div");
  messageEl.classList.add("message-section__message");

  messageEl.innerHTML = `
    <h4>${message.name}</h4>
    <p>${message.message}</p>

    <span>${message.email}</span>
  `;

  return messageEl;
}

function saveToLocalStorage() {
  localStorage.setItem("messages", JSON.stringify(messages));
}
