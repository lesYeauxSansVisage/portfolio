import "./Project.scss";

export type ProjectProps = {
  title: string;
  description: string;
  github: string;
  live: string | null;
  image: string;
};

const Project = ({ title, description, github, live, image }: ProjectProps) => {
  const githubButtonClassname = live
    ? "project__buttons--github"
    : "project__buttons--github full-width-btn";

  return (
    <article className="project">
      <img className="project__image" src={image} />
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>

        <div className="project__buttons">
          {live && (
            <a href={live} target="_blank" className="project__buttons--live">
              live
            </a>
          )}
          <a href={github} target="_blank" className={githubButtonClassname}>
            github
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
