import "./About.css";
import myImage from "../../images/ProfileCircle.png";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={myImage} alt="Meidan Kaye" />
      <article className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi! I'm Meidan Kaye, a Full Stack Web Developer from Netanya, Israel, fluent in Javascript, HTML5, CSS3, React, Node.js, Express & MongoDB
        </p>
        <p className="about__text">
          I've graduated from the Practicum100 Web Development training with this web application as my final project! Hope that it will help everyone keep up with the news.
        </p>
      </article>
    </section>
  );
}

export default About;
