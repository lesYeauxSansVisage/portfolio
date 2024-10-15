import "./Contact.scss";

import EmailIcon from "../components/Icons/EmailIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import LinkedinIcon from "../components/Icons/LinkedinIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title section-title--light">
        Vamos trabalhar juntos!
      </h2>

      <div className="contacts">
        <a
          href="https://www.linkedin.com/in/gilberto-araujo-872274220/"
          target="_blank"
          className="contacts__link"
        >
          <span>Linkedin</span>
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/lesYeauxSansVisage/"
          target="_blank"
          className="contacts__link"
        >
          <span>Github</span>
          <GithubIcon />
        </a>
        <span className="contacts__link">
          <span>gilbertoaraujo2557@gmail.com</span>
          <EmailIcon />
        </span>
        <span className="contacts__link">
          <span>+55 85 984621078</span>
          <PhoneIcon />
        </span>
      </div>
    </section>
  );
};

export default Contact;
