import HeaderImage from "../../assets/header.jpg";
import data from './data';
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
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >{item.icon}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
