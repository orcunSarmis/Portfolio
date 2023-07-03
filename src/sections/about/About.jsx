import AboutImage from "../../assets/about.jpg";
import Cv from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "../about/data";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
        </div>
        <p>
          Building projects my clients love have always been my passion. Being
          in the web development industry for over 2 years and serving more than
          70 happy clients worldwide, I'm always motivated to do more!
        </p>
        <p>
          Hi, my name is Orcun Sarmis from Brisbane, Australia. I'm a full-stack
          web developer with a Bachelors degree in Computer Science. My top
          priority is to get your business online the right way, giving you
          industry-standard design and all the functionality you need to operate
          smoothly online. Get in touch today with the details of your project
          let's get started! Check out my resume below!
        </p>
        <a href={Cv} download className="btn primary">
          Download CV <HiDownload />
        </a>
      </div>
    </section>
  );
};

export default About;
