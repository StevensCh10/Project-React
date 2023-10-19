import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li>
          <a
            href="https://www.instagram.com/s__wendell/"
            target="_blank"
            rel="noopener noreferrer">
              <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/stevens-wendell-42522119a/"
            target="_blank"
            rel="noopener noreferrer">
              <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/StevensCh10"
            target="_blank"
            rel="noopener noreferrer">
              <FaGithub />
          </a>
        </li>
        <p className="copy-right">
          <span>PersonalProject</span> &copy; 2022
        </p>
      </ul>
    </footer>
  );
}

export default Footer;
