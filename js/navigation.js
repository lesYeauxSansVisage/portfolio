export const nav = document.querySelector(".navigation");

export const navigationItems = document.querySelectorAll(
  ".navigation__list li a"
);

export const menuBtn = document.querySelector("#header-menu-button");

const header = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");

function removeActive() {
  const currentActive = document.querySelector(".navigation li.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
}

function fixNav() {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

export function navHighlighter() {
  fixNav();

  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;

    const sectionTop =
      current.getBoundingClientRect().top +
      window.pageYOffset -
      sectionHeight / 2;
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
