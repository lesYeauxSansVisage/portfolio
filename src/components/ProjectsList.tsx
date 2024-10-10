import Project, { ProjectProps } from "./Project";
import "./ProjectsList.scss";

type ProjectsListProps = {
  projects: ProjectProps[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <Project
          title={project.title}
          description={project.description}
          github={project.github}
          live={project.live}
          image={project.image}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
