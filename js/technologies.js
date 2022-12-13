import { backdrop } from "./backdrop.js";

export const technologyButtons = document.querySelectorAll(
  ".project__technologies-button"
);

export function technologyButtonListener(e) {
  const technologyName = e.target.innerText;

  renderTechnologyDescription(technologiesInfo[technologyName.toLowerCase()]);
}

function renderTechnologyDescription(technology) {
  backdrop.classList.add("active");
  backdrop.append(createTechnologyElement(technology));
}

function createTechnologyElement(technology) {
  const technologyEl = document.createElement("div");
  technologyEl.classList.add("technology");

  technologyEl.innerHTML = `
  <h3 class="technology__name">${technology.name}</h3>
            <div class="technology__img">
                <img src="${technology.img}" alt="${technology.name} logo">
            </div>
            <p class="technology_description">${technology.description}</p>

            <div class="technology__evaluate">
                <h4>Pros:</h4>
                <ul class="pros">
                    <li>${technology.pros[0]}</li>
                    <li>${technology.pros[1]}</li>
                    <li>${technology.pros[2]}</li>
                </ul>
                <h4>Contras:</h4>
                <ul class="cons">
                    <li>${technology.cons[0]}</li>
                    <li>${technology.cons[1]}</li>

                </ul>
            </div>

            <div class="technology__projects">
                <h4>Projetos que utilizam ${technology.name}: </h4>

                <span>${technology.projects[0]}</span>
                <span>${technology.projects[1]}</span>
                <span>${technology.projects[2]}</span>
                <span>${technology.projects[3]}</span>
                <span>${technology.projects[4]}</span>
                <span>${technology.projects[5]}</span>
            </div>
  `;

  return technologyEl;
}

const technologiesInfo = {
  javascript: {
    name: "JavaScript",
    img: "../assets/imgs/icons8-logotipo-javascript-250.png",
    description:
      "JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.",
    pros: ["Velocidade", "Simplicidade", "Versatilidade"],
    cons: ["Inconsistência entre Browsers", "Segurança Client-side"],
    projects: [
      "Google",
      "Youtube",
      "GoodReads",
      "Reddit",
      "Facebook",
      "Twitter",
    ],
  },
  html: {
    name: "HTML",
    img: "../assets/imgs/icons8-html-5-250.png",
    description:
      "A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento.",
    pros: ["Simples de Aprender", "Leve e Rápido", "Design Básico"],
    cons: ["Linguagem estática", "Código extenso"],
    projects: [
      "Udemy",
      "Reddit",
      "CRED",
      "Lyft",
      "Stackshare",
      "Delivery Hero",
    ],
  },
  css: {
    name: "CSS",
    img: "../assets/imgs/icons8-css3-250 (2).png",
    description:
      "CSS é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo em Cascatas. O CSS é fácil de aprender e entender e é facilmente utilizado com as linguagens de marcação HTML ou XHTML.",
    pros: [
      "Possibilidade de personalizar os sites",
      "Organização de arquivos mais eficiente",
      "Integração com HTML",
    ],
    cons: [
      "Nem sempre há compatilidade de estilo entre os navegadores",
      "Dependendo do uso, a página pode perder desempenho",
    ],
    projects: [
      "Glovo",
      "ROBLOX",
      "MasterCard",
      "Backbase",
      "Signal",
      "SendCloud",
    ],
  },
};
