import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.facebook.com/ville.majava.5/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.instagram.com/wilde_beaver/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.linkedin.com/in/ville-majava-84813215/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a href="mailto:vikke.majava@gmail.com" className={styles.socialLink}>
        Email
      </a>

      <a>© 2024 Ville Majava</a>
    </footer>
  );
};

export default Footer;
