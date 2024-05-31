import React from "react";
import MarkdownComponent from "../../MarkdownComponent";
import ScrollableText from "../../ScrollableText";
import { Card, Button, Collapse } from "react-bootstrap";
import { useState } from "react";

function Sparametrit() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div>
      <h1>Sparametrit</h1>
      <MarkdownComponent path="/RFkurssi/Sparametrit_md.md" />
      <h4>Esimerkki erään vahvistimen s-parametreista</h4>
      <ScrollableText path="/RFkurssi/bgu6005.txt" />
      <p></p>
      <p>
        Tämän tiedoston formaatti on niin sanottu{" "}
        <a href="https://docs.keysight.com/display/genesys2010/Touchstone+Format">
          Touchstone-formaatti
        </a>
        . Tiedoston alussa kommenttina nähdään vahvistimen biasointijännite ja
        -virta. Sen jälkeen nähdään taulukossa olevien arvojen yksiköt "MHz",
        "S", "MA", "R" ja "50". Tämä tarkoittaa, että taajuus on megahertseissä,
        arvot ovat S-parametreja, impedanssi on 50 ohmia ja arvot ovat
        reaalisia. "mag" viittaa magnitudiin eli vahvistukseen ja "arg" viittaa
        vaiheeseen asteina.
      </p>

      <Card>
        <Card.Body>
          <strong>Harjoitus 1:</strong> Katso yllä oleva vahvistimen
          s-parametri-taulukkoa. Päättele millä taajuuksilla tämä vahvistin on
          suunniteltu toimimaan?
        </Card.Body>
      </Card>
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
              <h4>Esimerkkiratkaisu</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  Tässä huomataan että S21 on yli yhden välillä 380-4600MHz.
                  Voidaan päätellä, että tämä vahvistin vahvistaa tällä
                  taajuusalueella. Suurimmat vahvistukset ovat välillä
                  1500-1700MHz. Tästä voisimme päätellä, että vahvistin on
                  tarkoitettu GPS/Glonass sovelluksiin. Tähän viittaa myös
                  tiedoston lopussa olevat kohinakertoimet, käsittelemme näitä
                  eri osiossa.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
      <Card>
        <Card.Body>
          <strong>Harjoitus 2:</strong> S-parametrit ovat käteviä
          suuritaajuisten signaalien kanssa. Mieti miksi niitä ei käytetä
          matalilla taajuuksilla vaikkapa audiotekniikassa?
        </Card.Body>
      </Card>
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
              <h4>Pohdintaa</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  S-parametrit määritellään etenevän ja heijastuvan aallon
                  suhteina. Matalilla taajuuksilla aallonpituus on hyvin suuri
                  verrattuna laitteiden ja siirtolinjojen dimensioihin. Tällöin
                  heijastuvien aaltojen energia on hyvin pieni ja vaihe-erojen
                  määritys olisi hankalaa, jolloin niitä ei voida mitata
                  tarkasti. Tällöin käytetään perinteisempiä
                  piirianalyysimenetelmiä kuten impedanssien ja
                  siirtofunktioiden laskentaa.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </div>
  );
}
export default Sparametrit;
