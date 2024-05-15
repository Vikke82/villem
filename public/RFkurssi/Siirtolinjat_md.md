- [Määritelmä](#määritelmä)
- [Aallon nopeus](#aallon-nopeus)
- [Lennätinyhtälöt](#lennätinyhtälöt)
- [Parikaapeli](#parikaapeli)

Siirtolinja termiä käytetään johtimesta, jonka dimensiot (pituus) ovat lyhyet suhteessa johtimessa kulkevan vaihtosähkön aallonpituuteen. Tässä tilanteessa on otettava huomioon vaihtosähkön aaltoluonne. Aaltoluonteen vuoksi sähkövirran ja jännitteen amplitudit samalla ajanhetkellä ovat erilaiset eri kohdissa johdinta.

<figure>
  <img src="/RFkurssi/Transmission_line_animation3.gif" alt="Vaihtosähkön kulku siirtolinjassa, https://en.wikipedia.org/wiki/Transmission_line#/media/File:Transmission_line_animation3.gif" style="width: 90%;">
  <figcaption>Kuva 1. Vaihtosähkön aaltoluonne kahden johtimen välillä (esim. lapamatokaapeli). Mustat pisteet edustavat virtaa ja nuolet sähkökenttää.</figcaption>
</figure>

### Määritelmä

Johdinta olisi ajateltava siirtolinjana kun siirtolinjan pituuden _d_ suhde vaihtosähkön aallonpituuteen &lambda;:
d < x\*&lambda;, jossa x on suuruusluokkaa 10~20. Tässä tilanteessa signaalin aaltoluonne alkaa näkymään käytännössä. Toki määritelmä voi olla tiukempikin tarkkuutta vaativissa sovelluksissa.

**HUOM!**
Siirtolinjassa aallonpituus riippuu aallon taajuudesta sekä siirtolinjan ominaisuuksista, kuten sen impedanssista ja dielektrisyyskerroimesta:

$$
\lambda = \frac{v}{f} = \frac{1}{f \sqrt{\epsilon \mu}}
$$

missä \( v \) on aallon nopeus väliaineessa, \( f \) on aallon taajuus, ($\epsilon$) väliaineen permittiivisyys ja ($\mu$) väliaineen permeabiliteetti.

### Aallon nopeus

Aallon nopeus \( v \) siirtolinjassa voidaan laskea kaavalla:

$$
v = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{\epsilon \mu}}
$$

Tämä yhtälö kertoo, miten siirtolinjan hajainduktanssi \( L \) ja hajakapasitanssi \( C \) vaikuttavat aallon nopeuteen. Voidaan siis ajatella, että mitä enemmän siirtolinjassa on kapasitanssia ja induktanssia, sen enemmän signaalilta vaatii aikaa "ladata ja purkaa" näitä reaktansseja.

## Lennätinyhtälöt

Lennätinyhtälöt ovat keskeisiä siirtolinjojen analysoinnissa radio- ja viestintätekniikassa. Ne kuvaavat, kuinka jännite ja virta muuttuvat siirtolinjan pituuden suhteen linjan omien ominaisuuksien, kuten induktanssin ja kapasitanssin, vuoksi. Lennätinyhtälöiden muodostamisessa ajatellaan, että siirtolinja jaetaan äärettömän lyhyisiin pätkiin ja yhtä pätkää voidaan kuvata passiivisten komponenttien avulla näin:

<figure>
  <img src="/RFkurssi/siirtolinja.png" alt="Siirtolinjan mallinnus" style="width: 90%;">
  <figcaption>Kuva 2. Siirtolinjan äärettömän lyhyen pätkän piirimalli. </figcaption>
</figure>

## Lennätinyhtälöiden differentiaalimuodot

Lennätinyhtälöt ilmaistaan tyypillisesti differentiaalimuodossa seuraavasti:

### 1. Jänniteyhtälö

Jännitteen muutos siirtolinjaa pitkin annetaan yhtälöllä:

$$
 \frac{\partial V}{\partial x} = -L \frac{\partial I}{\partial t} - R I
$$

missä:

- \( V \) on jännite,
- \( I \) on virta,
- \( x \) on paikka linjalla,
- \( t \) on aika,
- \( L \) on induktanssi yksikköpituutta kohden,
- \( R \) on resistanssi yksikköpituutta kohden.

### 2. Virtayhtälö

Virran muutos siirtolinjaa pitkin annetaan yhtälöllä:

$$
 \frac{\partial I}{\partial x} = -C \frac{\partial V}{\partial t} - G V
$$

missä:

- \( C \) on kapasitanssi yksikköpituutta kohden,
- \( G \) on konduktanssi yksikköpituutta kohden.

## Sovellukset ja merkitys

Nämä yhtälöt selittävät sähkömagneettisten aaltojen etenemisen siirtolinjoilla ja niitä käytetään määrittämään tärkeitä ominaisuuksia, kuten impedanssi, heijastus- ja siirtokertoimet.

Ratkaisemalla nämä yhtälöt asianmukaisilla reunaehtoilla voidaan analysoida aaltojen käyttäytymistä erilaisissa tilanteissa.

Käytännön työssä näitä harvoin kuitenkin tarvitsee vaan voidaan käyttää yksinkertaistettuja työkaluja kuten sirontaparametreja ([S-parametrit](https://villemajava.com/Sparametrit))

### Erilaisia siirtolinjatyyppejä

#### Parikaapeli

Puhekielessä parikaapeli voi olla myös kierretty parikaapeli mutta parikaapeli on yksinkertaisimmillaan kaksi johdinta, jotka kulkevat rinnakkain tietyllä etäisyydellä toisistaan.

<figure>
  <img src="/RFkurssi/lapamato.png" alt="Ns. lapamatokaapeli" style="width: 90%;">
  <figcaption>Kuva 2. Ns. lapamatokaapeli, jonka karakteristinen impedanssi 75 ohmia</figcaption>
</figure>

**Kierretty parikaapeli** tarkoittaa kahta johdinta, jotka ovat kierretty toistensa ympärille. Tämä parantaa EMI-ominaisuuksia (Electromagnetic Interference) eli häiriöiden kytkeytyminen ja säteily pienenee verrattuna suoraan parikaapeliin, koska pääasiassa _magneettinen_ kytkeytyminen vähenee. Kierretyn parin peräkkäiset silmukat ovat vastakkaisvaiheisia jolloin silmukassa syntynyt magneettikenttä kumoutuu seuraavan silmukan synnyttymän magneettikentän johdosta. Tätä rakennetta käytetään esimerkiksi puhelin- ja Ethernet-kaapeleissa.

<figure>
  <img src="/RFkurssi/kierrettypari.jpg" alt="Suojaamaton kierretty parikaapeli" style="width: 90%;">
  <figcaption>Kuva 3. Suojaamaton kierretty parikaapeli</figcaption>
</figure>
<p></p>

**Suojattu parikaapeli** tarkoittaa yleensä kierrettyä parikaapelia joiden päällä on sähköä johtava pinnoite, kalvo tai johdinsukka. Tämä vähentää _sähkökenttien_ kytkeytymistä ja säteilyä johtimista.

<figure>
  <img src="/RFkurssi/S-FTP_CAT_7.jpg" alt="Suojattu kierretty parikaapeli S-FTP_CAT_7" style="width: 90%;">
  <figcaption>Kuva 4. Suojattu kierretty parikaapeli S-FTP_CAT_7</figcaption>
</figure>
<p></p>

#### Koaksiaalikaapeli

Koaksiaalikaapeli on kaapeli, jonka keskijohdin kulkee kaapelin keskellä ja toinen johdin on suojavaippa. Näiden johtimien välissä on eriste.

<figure>
  <img src="/RFkurssi/koksi.jpg" alt="50 ohmin koaksiaalikaapeli" style="width: 90%;">
  <figcaption>Kuva 5. 50 ohmin koaksiaalikaapeli</figcaption>
</figure>
<p></p>

Koaksiaalikaapeleita käytetään radiotekniikassa korkeataajuisissa sovelluksissa. Koaksiaalikaapelissa signaali etenee ns. TEM-moodissa. Tämä tarkoittaa sähkökentän muotoa kaapelin sisällä. Jos taajuus nousee tarpeeksi suureksi, käytännössä kymmeniä tai satoja GHz, niin sähkökentän muoto alkaa muuttumaan eri moodeihin. Tämä aiheuttaa signaalin vääristymistä ja häviöiden kasvua. Tällöin koaksiaalikaapeli alkaa käyttäytymään [_aaltoputken_](#aaltoputki) tavoin mutta ollen huono siinä.

#### Aaltoputki
