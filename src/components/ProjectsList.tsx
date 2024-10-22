import "./ProjectsList.scss";

import Project, { ProjectProps } from "./Project";

type ProjectsListProps = {
  projects: ProjectProps[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          github={project.github}
          live={project.live}
          image={project.image}
          key={project.id}
          id={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
