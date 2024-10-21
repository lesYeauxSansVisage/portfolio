import "./Projects.scss";

import ProjectsList from "../components/ProjectsList";

import { projectsData } from "../data/projectData";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title section-title--dark">projetos</h2>

      <ProjectsList projects={projectsData} />
    </section>
  );
};

export default Projects;
