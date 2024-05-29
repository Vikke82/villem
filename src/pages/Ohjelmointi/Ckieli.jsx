import React from "react";
import { ListGroup } from "react-bootstrap";
import { useLanguage } from "../../Context";
import { Link } from "react-router-dom";

function Ckieli() {
  const { language } = useLanguage(); // Destructure language-muuttuja käyttöön
  return (
    <div>
      <h1>{language === "fi" ? "C-kieli" : "C-language"}</h1>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/Silmukat">{language === "fi" ? "Silmukat" : "Loops"}</Link>
        </ListGroup.Item>
      </ListGroup>
      <p></p>
    </div>
  );
}
export default Ckieli;
