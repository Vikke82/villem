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
            ? "Tervetuloa kotisivulleni"
            : "Welcome to my Home Page"}
        </h1>

        <p>
          {language === "fi"
            ? "Täällä hieman minusta ja muutakin tietoa."
            : "Something about me and some other info."}
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
              ? "Olen korkeakouluopettaja, jolla on kokemusta muun muassa radiotekniikasta, elektroniikasta, algoritmi- ja web-kehityksestä ja mobiilisovelluksista. Olen toiminut myös freelance-yrittäjänä useamman vuoden"
              : "I am a higher education teacher with experience including radio technology, electronics, algorithm- and web-development and mobile applications. I have also worked as a freelance entrepreneur for several years."}
          </p>
        </div>
        <div className={styles.section}>
          <h2>{language === "fi" ? "Asiantuntemus" : "Expertise"}</h2>
          <p>
            {language === "fi"
              ? "Erityisosaamiseni kattaa muun muassa radiotekniikan, antennisuunnittelun ja algoritmikehittämisen. Tällä hetkellä minulla on 110+ raportoitua keksintöä, joista 30+ on patentoitu tai patentointiprosessissa."
              : "My expertise includes radio technology, antenna design and algorithm development. Currently 110+ inventions reported where 30+ are patented or proceeding in patenting process"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
