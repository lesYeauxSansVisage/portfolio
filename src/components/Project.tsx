import {
  slideInFromLeft,
  slideInFromRight,
} from "../framer-animations/slideIn";
import "./Project.scss";

import { motion } from "framer-motion";

export type ProjectProps = {
  title: string;
  description: string;
  github: string;
  live: string | null;
  image: string;
  id: number;
};

const Project = ({
  title,
  description,
  github,
  live,
  image,
  id,
}: ProjectProps) => {
  const githubButtonClassname = live
    ? "project__buttons--github"
    : "project__buttons--github full-width-btn";

  const animation = id % 2 === 0 ? slideInFromLeft : slideInFromRight;

  return (
    <motion.article className="project" {...animation}>
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
    </motion.article>
  );
};

export default Project;
