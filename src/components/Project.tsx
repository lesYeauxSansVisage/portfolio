import "./Project.scss";

export const projectData = {
  title: "Project Title Example",
  description:
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut velittempora rerum at veniam labore nemo fugiat iste!",
  github: "https://example.com",
  live: "https://example.com",
  image: "/portfolio/WandererAboveSeaOfFog.jpg",
};

export type ProjectProps = {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
};

const Project = ({ title, description, github, live, image }: ProjectProps) => {
  return (
    <article className="project">
      <img className="project__image" src={image} />
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>

        <div className="project__buttons">
          <a href={live} target="_blank" className="project__buttons--live">
            live
          </a>
          <a href={github} target="_blank" className="project__buttons--github">
            github
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
