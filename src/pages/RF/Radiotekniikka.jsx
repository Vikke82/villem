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
      </ListGroup>
      <p></p>
    </div>
  );
}
export default Radiotekniikka;
