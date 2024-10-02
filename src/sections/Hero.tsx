import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1 className="heading-primary">
        <span className="heading-primary-main">
          Olá. Eu sou <span>&lt;Gilberto &#8725;&gt;</span>
        </span>
        <span className="heading-primary-sub">Desenvolvedor Front-end</span>
      </h1>
    </section>
  );
};

export default Hero;
