import HeaderImage from "../../assets/header.jpg";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Image" />
        </div>
        <h3>Orcun Sarmis</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis est
          pariatur molestias assumenda! Aspernatur dolorum consequuntur mollitia
          ipsum numquam maiores, animi quidem molestias aliquid similique
          tenetur. Voluptatibus rerum facilis explicabo.DC
        </p>
        <div className="header__cta">
          <a href="#contact">Let's Talk</a>
          <a href="#portfolio">My Work</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
