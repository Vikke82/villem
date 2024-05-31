S-parametrit, eli sirontaparametrit, ovat tärkeitä työkaluja RF- ja mikroaaltoelektroniikassa. Ne kuvaavat, miten sähköiset signaalit kulkevat komponenttien ja järjestelmien läpi, ja ne ovat erityisen hyödyllisiä, kun analysoidaan monimutkaisia sähköpiirejä korkeilla taajuuksilla.

### Mitä S-parametrit ovat?

1. **S-parametrien Perusajatus**: S-parametrit määrittelevät, miten sähkömagneettiset aallot siirtyvät komponentin tai verkon porttien välillä. Jokainen S-parametri S<sub>ij</sub> kuvaa signaalin siirtymistä portista _j_ porttiin _i_.

2. **Matriisimuoto**: S-parametreja esitetään yleensä matriisimuodossa, jossa:
   - S<sub>11</sub>: Tuloheijastuskerroin (signaalin heijastus takaisin tuloon).
   - S<sub>21</sub>: Läpäisykerroin (signaali, joka kulkee tulosta lähtöön).
   - S<sub>12</sub>: Takaisinkytkentäkerroin (signaali, joka kulkee lähdöstä tuloon).
   - S<sub>22</sub>: Lähtöheijastuskerroin (signaalin heijastus takaisin lähtöön).

## S-parametrien muodostuminen etenevien ja heijastuvien aaltojen suhteen

S-parametrit, eli sirontaparametrit, kuvaavat miten sähkömagneettiset aallot etenevät ja heijastuvat verkon porttien välillä. Ne määritellään seuraavasti:

1. **Eteneviin ja heijastuviin aaltoihin perustuvat suureet:**

   - a<sub>_i_</sub> on etenevä aalto portissa _i_.
   - b<sub>_i_</sub> on heijastuva aalto portissa _i_.

2. **S-parametrien määritelmät:**
   - S<sub>ij</sub> kuvaa heijastuvan aallon portissa _i_ ja etenevän aallon portissa _j_ välistä suhdetta, kun kaikki muut portit ovat sovitetut (eli niihin ei kohdistu heijastuksia).

S-parametrit voidaan esittää matriisimuodossa seuraavasti:

$$
\begin{pmatrix}
b_1 \\
b_2 \\
\vdots \\
b_n
\end{pmatrix}
=
\begin{pmatrix}
S_{11} & S_{12} & \cdots & S_{1n} \\
S_{21} & S_{22} & \cdots & S_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
S_{n1} & S_{n2} & \cdots & S_{nn}
\end{pmatrix}
\begin{pmatrix}
a_1 \\
a_2 \\
\vdots \\
a_n
\end{pmatrix}
$$

Tässä:

S<sub>ij</sub> $= \frac{b_i}{a_j}$

kun kaikki muut portit on sovitettu.

### Esimerkki kaksinapaisesta verkosta (2-porttiverkko)

<figure>
  <img src="/RFkurssi/twoport.png" alt="two-port network" style="width: 70%;">
  <figcaption>Kuva 1. Kaksiporttinen piiri</figcaption>
</figure>

2-porttiverkossa S-parametrit voidaan kirjoittaa yksityiskohtaisemmin seuraavasti:

$$
\begin{pmatrix}
b_1 \\
b_2
\end{pmatrix}
=
\begin{pmatrix}
S_{11} & S_{12} \\
S_{21} & S_{22}
\end{pmatrix}
\begin{pmatrix}
a_1 \\
a_2
\end{pmatrix}
$$

Missä:

- S<sub>11</sub> on tuloheijastuskerroin: S<sub>11</sub> $= \frac{b_1}{a_1} $ kun $ a_2 = 0 $.
- S<sub>21</sub> on läpäisykerroin: S<sub>21</sub> $= \frac{b_2}{a_1} $ kun $ a_2 = 0 $.
- S<sub>12</sub> on takaisinkytkentäkerroin: S<sub>12</sub> $= \frac{b_1}{a_2} $ kun $ a_1 = 0 $.
- S<sub>22</sub> on lähtöheijastuskerroin: S<sub>22</sub>$ = \frac{b_2}{a_2} $ kun $ a_1 = 0 $.

### Miksi S-parametreja käytetään?

- **Korkeataajuuskomponentit**: Ne ovat erityisen hyödyllisiä korkeataajuuskomponenteille (kuten vahvistimille, suotimille ja antenneille), koska perinteiset jännite- ja virta-parametrit (Z-, Y-parametrit) eivät ole käytännöllisiä korkeilla taajuuksilla, jolloin signaalit käyttäytyvät aaltoina.

- **Mittaukset ja analyysit**: S-parametrit voidaan mitata suoraan vektoripiirianalysaattorilla (VNA), ja ne mahdollistavat komponenttien ja järjestelmien analysoinnin eri taajuuksien suhteen.

### S-parametrien Tulkinta

- **Kompleksiset arvot**: S-parametrit ovat yleensä kompleksisia lukuja, jotka sisältävät sekä amplituditiedon että vaihekulman.

- **Magnitudi ja vaihe**: S-parametrien kompleksinen esitys voidaan esittää magnitudin ja vaiheen avulla. Esimerkiksi, S<sub>21</sub> = |S<sub>21</sub>|$ e^{j\theta} $, missä |S<sub>21</sub>| on signaalin magnitudi ja $ \theta $ on vaihekulma.

- **Taajuusriippuvuus**: S-parametrit riippuvat taajuudesta, joten ne ilmoitetaan aina tiettyä taajuutta kohden, katso esimerkki alla.

- **Olosuhderiippuvuus**: S-parametrit voivat riippua myös aktiivipiirin biasoinnista. Esimerkiksi vahvistintransistorin S-parametrit riippuvat transistorin kollektori-jännitteestä ja virrasta, katso esimerkki alla. S-parametreilla on usein myös lämpötilariippuvuus.

### Sovellukset

- **Suunnittelu ja optimointi**: RF- ja mikroaaltojärjestelmien suunnittelussa ja optimoinnissa S-parametrit auttavat ymmärtämään komponenttien käyttäytymistä ja vuorovaikutuksia taajuusalueella.
- **Simulointi**: S-parametreja käytetään laajalti simulaatio-ohjelmistoissa, kuten AWR, CST, ADS (Advanced Design System) ja HFSS (High Frequency Structure Simulator), sähköpiirien ja antennien suunnittelussa.
