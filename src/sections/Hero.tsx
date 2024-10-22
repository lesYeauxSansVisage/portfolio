import "./Hero.scss";

import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
} from "../framer-animations/slideIn";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1 className="heading-primary">
        <motion.span {...slideInFromLeft} className="heading-primary-main">
          Olá. Eu sou <span>&lt;Gilberto &#8725;&gt;</span>
        </motion.span>
        <motion.span {...slideInFromRight} className="heading-primary-sub">
          Desenvolvedor Front-end
        </motion.span>
      </h1>
    </section>
  );
};

export default Hero;
