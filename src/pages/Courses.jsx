import React from "react";
import { ListGroup } from "react-bootstrap";
import { useLanguage } from "../Context";
import { Link } from "react-router-dom";

function Courses() {
  const { language } = useLanguage(); // Destructure language-muuttuja käyttöön

  return (
    <div>
      <h1>
        {language === "fi"
          ? "Täältä löydät tietoa kursseista"
          : "Here you can find information about the courses"}
      </h1>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/Radiotekniikka">
            {language === "fi" ? "Radiotekniikka" : "Radiotechnology"}
          </Link>
        </ListGroup.Item>
      </ListGroup>
      <p></p>
    </div>
  );
}

export default Courses;
