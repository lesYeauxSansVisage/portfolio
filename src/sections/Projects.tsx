import { projectData } from "../components/Project";
import ProjectsList from "../components/ProjectsList";
import "./Projects.scss";

const dataArray = [projectData, projectData, projectData, projectData];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>

      <ProjectsList projects={dataArray} />
    </section>
  );
};

export default Projects;
