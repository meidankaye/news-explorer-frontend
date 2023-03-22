import "./Footer.css";
import githubLogo from "../../images/github-logo.svg";
import linkedInLogo from "../../images/linkedin-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <div className="footer__page-links">
          <a className="footer__link" href="/">
            Home
          </a>
          <a
            className="footer__link"
            href="https://practicum.com/en-isr/?gclid=CjwKCAjwiJqWBhBdEiwAtESPaG-Yi1Douzg3PoUTqXMKp5X99BpuXWF7q_i6Hnj39Tn6cHvfDjfQURoCDtcQAvD_BwE"
            target={"_blank"}
            rel="noreferrer"
          >
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__social-box">
          <a
            className="footer__link footer__link-social"
            href="https://github.com/meidankaye"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Github logo" />
          </a>
          <a
            className="footer__link footer__link-social"
            href="https://www.linkedin.com/in/meidan-kaye-2a3b6817a/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="Facebook logo" />
          </a>
        </div>
      </nav>
      <span className="footer__text">
        &copy; {new Date().getFullYear()} SuperSite, Powered by News API
      </span>
    </footer>
  );
}

export default Footer;
