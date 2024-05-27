import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Silmukat = () => {
  return (
    <Container>
      <h1 className="mt-5">Silmukat C-kielessä</h1>
      <p className="mb-4">
        Silmukat ovat tärkeitä ohjelmoinnissa, koska niiden avulla voidaan
        vähentää virheitä, koodin määrää ja uudelleen käyttää koodia.
      </p>
      <p className="mb-4">
        Toistuvat tehtävät ohjelmassa voidaan suorittaa silmukoilla. Esimerkiksi
        alla olevassa kuvassa robotti suorittaa kyykkyjä toistuvasti. Käsky
        robotille voisi olla esimerkiksi "kyykkää toistuvasti kunnes käsketään
        lopettaa".
      </p>
      <img src="/Ohjelmointi/A59.gif"></img>
      <p className="mb-4">
        C-kielessä on kolme erilaista silmukkatyyppiä: <code>while</code>,{" "}
        <code>for</code> ja <code>do-while</code>.
      </p>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h4>while-silmukka</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <code>while</code> silmukka toistaa koodilohkon niin kauan
                  kuin ehto on tosi.
                </p>
                <pre>
                  <code>{`int i = 0;
while (i < 5) {
    printf("i on %d\\n", i);
    i++;
}`}</code>
                </pre>
                <p>
                  Tässä esimerkissä muuttuja <code>i</code> alustetaan arvoon 0
                  ja kasvaa yhdellä jokaisen iteraation jälkeen, kunnes se
                  saavuttaa arvon 5.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h4>do-while-silmukka</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <code>do-while</code> silmukka suorittaa koodilohkon vähintään
                  kerran ennen ehdon tarkistamista.
                </p>
                <pre>
                  <code>{`int i = 0;
do {
    printf("i on %d\\n", i);
    i++;
} while (i < 5);`}</code>
                </pre>
                <p>
                  Tässä esimerkissä muuttuja <code>i</code> alustetaan arvoon 0
                  ja kasvaa yhdellä jokaisen iteraation jälkeen, kunnes se
                  saavuttaa arvon 5. Koodi suoritetaan aina vähintään kerran.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h4>for-silmukka</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <code>for</code> silmukka on tiivistetty muoto, joka yhdistää
                  muuttujan alustuksen, ehdon tarkistuksen ja päivityksen yhteen
                  riviin.
                </p>
                <pre>
                  <code>{`for (int i = 0; i < 5; i++) {
    printf("i on %d\\n", i);
}`}</code>
                </pre>
                <p>
                  Tässä esimerkissä muuttuja <code>i</code> alustetaan arvoon 0
                  ja kasvaa yhdellä jokaisen iteraation jälkeen, kunnes se
                  saavuttaa arvon 5.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Silmukat;
