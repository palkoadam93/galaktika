// src/components/csillagok.js
import React from 'react';
import '../style/style.css';
import RhoOphiuchi from '../img/RhoOphiuchi.jpg'; // Helyes útvonalat adj meg a képekhez
import HRdiagram from '../img/HRdiagram.jpg'; // Helyes útvonalat adj meg a képekhez
import fenye from '../img/fenye.jpg'; // Helyes útvonalat adj meg a képekhez

function Csillagok() {
  return (
    <div className="csillagok-container"> {/* Egy konténer div az egész komponensnek */}
      <header id="csill">
        <h1>A csillagok</h1>
        <h3>Sokszínű fények az égen</h3>
      </header>

      <p>
        A csillagok hatalmas, forró gázgolyóbisok. Energiájukat a belsejükben
        lezajló nukleáris reakcióknak köszönhetik. Színüket és fényüket a
        létüket irányító két, egymással szemben álló erő: a nyomás és a
        gravitáció magyarázza.
      </p>

      <img src={RhoOphiuchi} alt="Rho Ophiuchi régiója az Antares csillaggal" />
      <p>
        A Rho Ophiuchi régiójában (balra, lent) egy öregedő vörös óriást, az
        Antarest lehet látni, és fiatal kék csillagokat, amelyek és
        csillagközi környezetben gomolygó gázokat megvilágítotva valóságos
        fénykavalkádot produkálnak, végül pedig sötét felhőket, amelyekben a
        csillagok születnek.
      </p>

      <article>
        <img src={HRdiagram} alt="HR diagram" />
        <p>
          Ha színük és fényük szerint rendezzük el őket, a csillagok átlós
          irányban, egy ún. fősorozat mentén oszlanak el, amelyen a legkékebbek
          a legfényesebbek, s a legvörösebbek a leghalványabbak. Az egyik
          sarokban összegyűlnek az igen fényes vörös csillagok, azaz a vörös
          óriások.
        </p>
      </article>

      <p>
        A barna törpéket, amelyeknek nincs saját fényük, csak 1995 óta
        ismerjük. Könnyű összetéveszteni őket azokkal az óriásbolygókkal,
        amelyeket szintén csak mostanában kezdünk felfedezni a csillagok
        körül. Pedig ezek a törpék nagyon jelentősek az asztrofizikában, mert
        lehet, hogy ők a Világegyetem ún. hiányzó tömegének nem
        elhanyagolható részét képezik.
      </p>

      <img src={fenye} alt="Csillag fénye" />

      <div className="tudtad">
        <h2>Tudtad?</h2>
        <p>A csillagok színe a hőmérsékletüktől függ.</p>
      </div>

      <h3>Számok</h3>
      <ul>
        <li>
          A 30 naptömegű (kék) csillagok feltételezett élettartama 10 millió év.
          A 3 naptömegű fehéreké eléri az 500 millió évet. A sárgák, amilyen a
          Nap is, 10 milliárd évig ragyoghatnak, és a 0,5 naptömegű kis vörös
          törpék elméletileg akár a 200 milliárd évet is megérhetnének.
        </li>
        <li>
          A csillagok felszíni hőmérséklete 2500 K-től (vörös törpék) több mint
          50 000 K-ig (kék csillagok) terjed.
        </li>
        <li>A Nap felszíni hőmérséklete megközelíti a 6000 K-t.</li>
      </ul>
    </div>
  );
}

export default Csillagok;