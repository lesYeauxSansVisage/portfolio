import { backdrop } from "./backdrop.js";
import createMessage from "./constructors/message.js";
import { createModal } from "./modal.js";
import { renderMessages, addMessage } from "./messages.js";

export const form = document.querySelector("#message-form");

export const seeMessagesBtn = document.querySelector("#see-messages");

export function formListener(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!name || !email || !message) {
    createModal(
      `<i class="fa-solid fa-warning"></i><p>Aparentemente houve um erro. Por favor, insira novamente seus dados.</p>`
    );
    return;
  }

  const newMessage = createMessage(name, email, message);

  addMessage(newMessage);

  createModal(
    `<i class="fa-solid fa-check"></i><p>Sua mensagem foi enviada com sucesso! Clique no botão "Ver Mensagens" para visualizar.</p>`
  );

  form.reset();
}

export function seeMessagesBtnListener() {
  backdrop.classList.add("active");
  renderMessages();
}
