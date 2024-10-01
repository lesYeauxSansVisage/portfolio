import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./MainHeader.scss";

const headerLinks = [
  { name: "Sobre", href: "about" },
  { name: "Projetos", href: "projects" },
];

const MainHeader = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 60) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    };
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const mainHeaderClassname = navbarActive
    ? "main-header active"
    : "main-header";

  return (
    <header className={mainHeaderClassname}>
      <div className="main-header__logo">
        <a href="#">
          <img src="\portfolio\icons8-letter-g-250.png" alt="" />
        </a>
      </div>
      <nav className="main-navigation">
        <ul>
          {headerLinks.map((link) => (
            <li key={link.href}>
              <Link
                spy={true}
                to={link.href}
                duration={500}
                activeClass="active"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
