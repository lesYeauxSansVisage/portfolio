import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <header className={"main-header"}>
      <div className={"logo"}>
        <a href="/">
          <img src="\portfolio\icons8-letter-g-250.png" alt="" />
        </a>
      </div>
      <nav className={"main-navigation"}>
        <ul>
          <li>
            <a href="/projects">Projetos</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
