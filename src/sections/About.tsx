import {
  slideInFromLeft,
  slideInFromRight,
} from "../framer-animations/slideIn";
import "./About.scss";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.h2
        {...slideInFromLeft}
        className="section-title section-title--light"
      >
        sobre
      </motion.h2>

      <motion.p {...slideInFromRight}>
        Formado em Análise e Desenvolvimento de Sistemas. Participei de alguns
        programas de formação, incluindo um programa de residência em
        Desenvolvimento de Software (IUUL). Durante a residência, realizamos 3
        projetos e tivemos avaliações e apresentações semanais. Durante o último
        mês de residência, tivemos contato com código de produção e
        implementamos features e testes para componentes/páginas do site de
        fundos da ICATU. Além disso, participei da SDC AcademY um programa de
        Formação focado em Linux, SAS, Python e Power BI. Foram feitas algumas
        avaliações durante o programa e como projeto final primeiro limpamos e
        depois unificamos dados vindos de diferentes fontes para carregá-los no
        Power BI, produzindo também a documentação de como tudo foi feito e um
        Dashboard para visualização.
      </motion.p>
    </section>
  );
};

export default About;
