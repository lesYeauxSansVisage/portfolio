import { nav } from "./navigation.js";

export const backdrop = document.querySelector(".backdrop");

export function backdropListener(e) {
  if (e.target !== e.currentTarget) return;

  nav.classList.remove("active");
  backdrop.classList.remove("active");

  backdrop.innerHTML = "";
}
