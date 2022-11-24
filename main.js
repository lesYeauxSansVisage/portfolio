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

const header = document.querySelector(".header");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > header.offsetHeight + 84) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;

    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 80;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      removeActive();
      document
        .querySelector(".navigation ul li a[href*=" + sectionId + "]")
        .parentElement.classList.add("active");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .parentElement.classList.remove("active");
    }
  });
}
