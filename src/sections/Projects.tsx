import "./Projects.scss";

import ProjectsList from "../components/ProjectsList";

import { projectsData } from "../data/projectData";

import { motion } from "framer-motion";
import { slideInFromLeft } from "../framer-animations/slideIn";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title section-title--dark"
        {...slideInFromLeft}
      >
        projetos
      </motion.h2>

      <ProjectsList projects={projectsData} />
    </section>
  );
};

export default Projects;
