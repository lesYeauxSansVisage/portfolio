const navigationItems = document.querySelectorAll(".navigation__list li a");

navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.parentElement.classList.add("active");
  });
});

function removeActive() {
  const currentActive = document.querySelector(".navigation li.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
}

const menuBtn = document.querySelector("#header-menu-button");
const backdrop = document.querySelector(".backdrop");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  backdrop.classList.add("active");
});

backdrop.addEventListener("click", () => {
  nav.classList.remove("active");
  backdrop.classList.remove("active");
});
