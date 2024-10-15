import { projectData } from "../components/Project";
import ProjectsList from "../components/ProjectsList";
import "./Projects.scss";

const dataArray = [projectData, projectData, projectData, projectData];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title section-title--dark">projetos</h2>

      <ProjectsList projects={dataArray} />
    </section>
  );
};

export default Projects;
