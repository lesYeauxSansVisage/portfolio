const navigationItems = document.querySelectorAll(".navigation__list li a");
const menuBtn = document.querySelector("#header-menu-button");
const backdrop = document.querySelector(".backdrop");
const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");

const demoButtons = document.querySelectorAll(".demo-button");

function removeActive() {
  const currentActive = document.querySelector(".navigation li.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
}

demoButtons.forEach((demoButton) => {
  demoButton.addEventListener("click", (e) => {
    backdrop.classList.add("active");

    const projectName =
      demoButton.parentElement.firstChild.nextSibling.innerText.toLowerCase();

    createVideoElement(projectName);
  });
});

function createVideoElement(projectName) {
  const videoContainerEl = document.createElement("div");
  videoContainerEl.classList.add("project__video");
  const videoEl = document.createElement("video");
  videoEl.src = `./assets/videos/${projectName}.mp4`;
  videoEl.setAttribute("controls", true);

  videoContainerEl.append(videoEl);

  backdrop.append(videoContainerEl);
}

function fixNav() {
  if (window.scrollY > header.offsetHeight + 70) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

function navHighlighter() {
  fixNav();

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

backdrop.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;

  nav.classList.remove("active");
  backdrop.classList.remove("active");

  backdrop.innerHTML = "";
});

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
