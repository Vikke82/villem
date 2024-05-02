- [Määritelmä](#määritelmä)
- [Aallon nopeus](#aallon-nopeus)
- [Parikaapeli](#parikaapeli)

Siirtolinja termiä käytetään johtimesta, jonka dimensiot (pituus) ovat lyhyet suhteessa johtimessa kulkevan vaihtosähkön aallonpituuteen. Tässä tilanteessa on otettava huomioon vaihtosähkön aaltoluonne. Aaltoluonteen vuoksi sähkövirran ja jännitteen amplitudit samalla ajanhetkellä ovat erilaiset eri kohdissa johdinta.

<figure>
  <img src="/RFkurssi/Transmission_line_animation3.gif" alt="Vaihtosähkön kulku siirtolinjassa, https://en.wikipedia.org/wiki/Transmission_line#/media/File:Transmission_line_animation3.gif" style="width: 90%;">
  <figcaption>Kuva 1. Vaihtosähkön aaltoluonne kahden johtimen välillä. Mustat pisteet edustavat virtaa ja nuolet sähkökenttää.</figcaption>
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

### Erilaisia siirtolinjatyyppejä

#### Parikaapeli

Puhekielessä parikaapeli voi olla myös kierretty parikaapeli mutta parikaapeli on yksinkertaisimmillaan kaksi johdinta, jotka kulkevat rinnakkain tietyllä etäisyydellä toisistaan.

<figure>
  <img src="/RFkurssi/lapamato.png" alt="Ns. lapamatokaapeli" style="width: 90%;">
  <figcaption>Kuva 2. Ns. lapamatokaapeli, jonka karakteristinen impedanssi 75 ohmia</figcaption>
</figure>

**Kierretty parikaapeli** tarkoittaa kahta johdinta, jotka ovat kierretty toistensa ympärille. Tämä parantaa EMC-ominaisuuksia eli häiriöiden kytkeytyminen ja säteily pienenee verrattuna suoraan parikaapeliin. Tätä rakennetta käytetään esimerkiksi puhelin- ja Ethernet-kaapeleissa.

  <img src="/RFkurssi/kierrettypari.jpg" alt="Suojaamaton kierretty parikaapeli" style="width: 90%;">
  <figcaption>Kuva 3. Suojaamaton kierretty parikaapeli</figcaption>
</figure>
