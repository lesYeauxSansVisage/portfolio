const navigationItems = document.querySelectorAll(".navigation__list li");

console.log(navigationItems);

navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  navigationItems.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}
