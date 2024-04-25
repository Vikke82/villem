import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <a
        href="https://www.facebook.com/ville.majava.5/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} /> Facebook
      </a>
      <a
        href="https://www.instagram.com/wilde_beaver/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>

      <a>© 2024 Ville Majava</a>
    </footer>
  );
};

export default Footer;
