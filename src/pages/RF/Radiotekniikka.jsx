import React from "react";
import { ListGroup } from "react-bootstrap";
import { useLanguage } from "../../Context";
import { Link } from "react-router-dom";

function Radiotekniikka() {
  const { language } = useLanguage(); // Destructure language-muuttuja käyttöön
  return (
    <div>
      <h1>{language === "fi" ? "Radiotekniikka" : "RF Technology"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/Siirtolinjat">
            {language === "fi" ? "Siirtolinjat" : "Transmission lines"}
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Emaallot">
            {language === "fi" ? "EM-aallot" : "EM-waves"}
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Antennit">
            {language === "fi" ? "Antennit" : "Antennas"}
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Sparametrit">
            {language === "fi" ? "S-parametrit" : "S-parameters"}
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Smith">
            {language === "fi" ? "Smithin diagrammi" : "Smith diagram"}
          </Link>
        </ListGroup.Item>
      </ListGroup>
      <p></p>
    </div>
  );
}
export default Radiotekniikka;
