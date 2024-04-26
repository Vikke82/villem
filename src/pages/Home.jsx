import React from "react";
import styles from "../styles/Home.module.css";
import { useLanguage } from "../Context";

const Home = () => {
  const { language } = useLanguage(); // Destructure language-muuttuja käyttöön

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          {language === "fi"
            ? "Tervetuloa kotisivulle"
            : "Welcome to the Home Page"}
        </h1>

        <p>
          {language === "fi"
            ? "Täältä löydät tietoa minun harrastuksistani, työstäni ja asiantuntemuksestani."
            : "Some information of my hobbies, work and expertise."}
        </p>
      </header>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>{language === "fi" ? "Harrastukset" : "Hobbies"}</h2>
          <p>
            {language === "fi"
              ? "Voimanosto, teknologia, luonto"
              : "Powerlifting, technology, nature"}
          </p>
        </div>
        <div className={styles.section}>
          <h2>{language === "fi" ? "Työ" : "Work"}</h2>
          <p>
            {language === "fi"
              ? "Olen korkeakouluopettaja, jolla on kokemusta radiotekniikasta, elektroniikasta, web-kehityksestä ja mobiilisovelluksista."
              : "I am a higher education teacher with experience in radio technology, electronics, web development and mobile applications."}
          </p>
        </div>
        <div className={styles.section}>
          <h2>{language === "fi" ? "Asiantuntemus" : "Expertise"}</h2>
          <p>
            {language === "fi"
              ? "Erityisosaamiseni kattaa muun muassa radiotekniikan, antennisuunnittelun ja algoritmikehittämisen."
              : "My expertise includes radio technology, antenna design and algorithm development."}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
