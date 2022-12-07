import { backdrop, backdropListener } from "./backdrop.js";
import { demoButtonListener, demoButtons } from "./demo.js";
import { navigationItems, menuBtn, navHighlighter } from "./navigation.js";

backdrop.addEventListener("click", backdropListener);

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
