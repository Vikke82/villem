import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Under construction</h1>
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

      <footer className={styles.footer}>
        <p>© 2024 Ville Majava</p>
      </footer>
    </div>
  );
};

export default Home;
