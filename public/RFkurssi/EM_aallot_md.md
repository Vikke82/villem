# Sähkömagneettiset aallot ja eteneminen

Sähkömagneettinen energia etenee fotoneina, joilla on sekä hiukkasen, että aallon ominaisuuksia. Sähkömagneettinen aalto on kolmiulotteinen aalto, jossa magneettikentän ja sähkökentän aallot värähtelevät samassa tahdissa. Kiihtyvät, hidastuvat tai muuttuvat sähkövaraukset synnyttävät sähkömagneettisia aaltoja, tämä voidaan päätellä [Maxwellin yhtälöistä](#maxwellin-yhtälöt)

<figure>
  <img src="/RFkurssi/Electromagneticwave3D.gif" alt="Sähkömagneettinen aalto, By Lookang - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=16874302" style="width: 70%;">
  <figcaption>Kuva 1. Sähkömagneettisen aallon eteneminen tyhjiössä, E kuvastaa sähkökenttää ja B magneettikenttää. Aalto etenee TEM-moodissa</figcaption>
</figure>
<p></p>

### Maxwellin yhtälöt

Maxwellin yhtälöt kuvaavat matemaattisesti miten sähkömagneettiset aallot syntyvät.

#### Gaussin laki sähkökentille

$
\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}
$

Tämä yhtälö kertoo, että sähkökentän divergenssi tietyssä pisteessä on suoraan verrannollinen kyseisessä pisteessä olevaan sähkövarauksen tiheyteen ja kuvaten kuinka sähkövaraukset luovat sähkökenttiä.

#### Gaussin laki magneettikentille

$
\nabla \cdot \mathbf{B} = 0
$

Tämä yhtälö ilmaisee, että magneettikentillä ei ole "lähteitä" tai "nieluja" (toisin sanoen, magneettisia monopoleja ei ole havaittu); magneettikenttien viivat ovat aina suljettuja polkuja.

#### Faradayn induktiolaki

$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$

Faradayn laki kertoo, että muuttuva magneettikenttä luo (indusoi) sähkökentän. Tämä on perustana sähkögeneraattoreille ja kaikille induktiolla toimiville laitteille.

#### Ampère-Maxwellin laki

$
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$

Tämä kaava kertoo, kuinka sähkövirrat ja muuttuvat sähkökentät luovat magneettikenttiä. $\mu_0$ on tyhjiön permeabiliteetti.

Näistä kaavoista voidaan päätellä, että muuttuva sähkökenttä luo muuttuvan magneettikentän ja muuttuva magneettikenttä luo muuttuvan sähkökentän. Sähkömagneettinen säteily on muuttuvien sähkökenttien ja magneettikenttien jatkuvaa "tanssia". Ja koska muuttuva virta johtimessa luo muuttuvan magneettikentän niin muuttuva virta siis luo muuttuvan sähkökentän. Ja toisnpäin: muuttuva sähkökenttä luo johtimeen muuttuvan virran. Tämä selittää [antennien](https://villemajava.com/Antennit)
toimintaa.
