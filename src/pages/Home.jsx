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
          Täältä löydät tietoa minun harrastuksistani, työstäni ja
          asiantuntemuksestani.
        </p>
      </header>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Harrastukset</h2>
          <p>Voimanosto, teknologia, luonto.</p>
        </div>
        <div className={styles.section}>
          <h2>Työ</h2>
          <p>
            Olen korkeakouluopettaja, jolla on kokemusta radiotekniikasta,
            elektroniikasta, web-kehityksestä ja mobiilisovelluksista.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Asiantuntemus</h2>
          <p>
            Erityisosaamiseni kattaa radiotekniikan, antennisuunnittelun,
            algoritmikehittämisen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
