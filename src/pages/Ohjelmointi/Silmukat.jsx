import React from "react";
import { Button, Collapse, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

const Silmukat = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <Container>
      <h1 className="mt-5">Silmukat C-kielessä</h1>
      <p className="mb-4">
        Silmukat ovat tärkeitä ohjelmoinnissa, koska niiden avulla voidaan
        vähentää virheitä, koodin määrää ja uudelleen käyttää koodia.
      </p>
      <p className="mb-4">
        Toistuvat tehtävät ohjelmassa voidaan suorittaa silmukoilla. Silmukat
        ovat ns. toistorakenteita. Sanotaan esimerkiksi, että tahdomme alla
        olevan kuvan robotin suorittavan kyykkyjä niin pitkään kuin halutaan.
        Voisimme käskeä robottia "kyykkää, kyykkää..." toistuvasti kunnes
        haluamme robotin lopettavan. Käskyn toistelun sijaan voisimme kuitenkin
        käyttää silmukkaa. Miten tässä tapauksessa käsky muuttuisi?.
      </p>
      <img src="/Ohjelmointi/A59.gif"></img>
      <p className="mb-4">
        Tässä voisimme käyttää käskyä näin: "kyykkää, kunnes sanon lopeta".
        Englanniksi tämä olisi "squat until I say stop" tai "Squat while I say
        nothing" eli kyykkää kunnes toisin käsketään. Tämä on eräänlainen
        esimerkki <code>while</code> silmukasta. Silmukka on ohjelmointirakenne,
        joka toistaa koodilohkon niin kauan kuin ehto on tosi. Vinkki: voit
        käyttää C-kielen harjoitteluun esimerkiksi tätä online-kääntäjää: Linkki
        kääntäjään{" "}
        <a href="https://www.programiz.com/c-programming/online-compiler/">
          tässä
        </a>
      </p>
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
                  saavuttaa arvon 5. Silmukkaa toistetaan niin kauan kuin ehto
                  on tosi eli niin kauan kuin <code>i</code> on pienempi kuin 5.
                  Huomaa, että ehto tarkistetaan ennen koodilohkon
                  suorittamista.
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
      <p>
        <code>for</code> silmukka on monesti käytetyin silmukka kompaktin
        esitystavan myötä ja koska alustus ja lopetusehdot vaaditaan niin se voi
        ehkäistä ikuisten silmukoiden syntymistä.
      </p>
      <p>
        Harjoitus 1: Kirjoita ohjelma, joka tulostaa kuukausien numerot{" "}
        <code>for</code> -silmukalla.
      </p>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="primary"
      >
        Näytä/piilota esimerkkiratkaisu
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card className="mt-4">
            <Card.Header>
              <h4>for-silmukka</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Yksi ratkaisu voisi olla seuraava:</p>
                <pre>
                  <code>{`for (int i = 0; i < 13; i++) {
    printf("Kuukausi %d\\n", i);
}`}</code>
                </pre>
                <p>
                  Tässä esimerkissä muuttuja <code>i</code> alustetaan arvoon 0
                  ja kasvaa yhdellä jokaisen iteraation jälkeen, kunnes se
                  saavuttaa arvon 12.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
      <div className="mt-5"></div>
      <p className="mb-4">
        Silmukoita voidaan käyttää sisäkkäin, jolloin voimme käsitellä vaikkapa
        taulukon, matriisin data-alkioita tai vaikka kuvan pikseleitä.
      </p>

      <p>
        Harjoitus 2: Kirjoita ohjelma, joka tulostaa matriisin{" "}
        <code>{`int matrix[2][3] = { {1, 2, 3}, {5, 6, 7} };`}</code> arvot{" "}
        <code>for</code> -silmukalla.
      </p>

      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
        variant="primary"
      >
        Näytä/piilota esimerkkiratkaisu
      </Button>
      <Collapse in={open2}>
        <div id="example-collapse-text">
          <Card className="mt-4">
            <Card.Header>
              <h4>for-silmukat matriisin arvojen tulostukseen</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Yksi ratkaisu voisi olla seuraava:</p>
                <pre>
                  <code>{`int matrix[2][3] = { {1, 2, 3}, {5, 6, 7} };

int i, j;
for (i = 0; i < 2; i++) {
  for (j = 0; j < 3; j++) {
    printf("%d", matrix[i][j]);
  }
}`}</code>
                </pre>
                <p>
                  Tässä esimerkissä muuttuja <code>i</code> iteroi matriisin
                  rivinumerot ja <code>j</code> sarakenumerot. Tämä tulostaa
                  kaikki matriisin arvot.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </Container>
  );
};

export default Silmukat;
