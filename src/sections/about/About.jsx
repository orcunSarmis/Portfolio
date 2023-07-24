import AboutImage from "../../assets/about.jpg";
import Cv from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "../about/data";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
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
          Building projects that enable my clients to reach their goals is at the heart of what I do. Being
          in the web development industry for close to 2 years, I'm looking for the next step in my career.
        </p>
        <p>
          A motivated and enthusiastic software engineering graduate with a
          background in web-based development projects looking to launch a
          career in Fullstack Development. Possessing a sound understanding of
          current coding tools, frameworks and platforms, including HTML/CSS,
          JavaScript, and React. Good communicator with excellent
          problem-solving skills and the ability to quickly learn new
          technologies. Seeking further experience within this field in an
          entry-level role where I can utilize my technical skills and develop
          knowledge through continuous learning.
        </p>
        <a href={Cv} download className="btn primary">
          Download CV <HiDownload />
        </a>
      </div>
    </section>
  );
};

export default About;
