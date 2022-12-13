import { backdrop, backdropListener } from "./backdrop.js";
import { demoButtonListener, demoButtons } from "./demo.js";
import {
  navigationItems,
  menuBtn,
  navHighlighter,
  nav,
  removeActive,
} from "./navigation.js";
import {
  form,
  formListener,
  seeMessagesBtn,
  seeMessagesBtnListener,
} from "./form.js";

import { technologyButtons, technologyButtonListener } from "./technologies.js";

backdrop.addEventListener("click", backdropListener);

form.addEventListener("submit", formListener);

seeMessagesBtn.addEventListener("click", seeMessagesBtnListener);

demoButtons.forEach((demoButton) => {
  demoButton.addEventListener("click", demoButtonListener);
});

navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.parentElement.classList.add("active");
  });
});

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  backdrop.classList.add("active");
});

window.addEventListener("scroll", navHighlighter);

technologyButtons.forEach((button) => {
  button.addEventListener("click", technologyButtonListener);
});
