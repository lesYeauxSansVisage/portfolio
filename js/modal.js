export function createModal(template) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = template;

  document.body.append(modal);

  removeModal();
}

function removeModal() {
  const modal = document.querySelector(".modal");

  setTimeout(() => {
    modal.classList.add("remove");

    setTimeout(() => {
      modal.remove();
    }, 1500);
  }, 1500);
}
