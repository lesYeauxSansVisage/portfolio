import { backdrop } from "./backdrop.js";

export const demoButtons = document.querySelectorAll(".demo-button");

export function demoButtonListener(e) {
  backdrop.classList.add("active");

  const clickedButton = e.target;

  const projectName =
    clickedButton.parentElement.firstChild.nextSibling.innerText.toLowerCase();

  createVideoElement(projectName);
}

function createVideoElement(projectName) {
  const videoContainerEl = document.createElement("div");
  videoContainerEl.classList.add("project__video");
  const videoEl = document.createElement("video");
  videoEl.src = `./assets/videos/${projectName}.mp4`;
  videoEl.setAttribute("controls", true);

  videoContainerEl.append(videoEl);

  backdrop.append(videoContainerEl);
}
