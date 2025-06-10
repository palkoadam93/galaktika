// src/components/Naprendszer.js
import React from 'react';
import '../style/style.css'; // Hozd létre ezt a CSS fájlt a stílusoknak
import meretaranyos from '../img/meretaranyos.jpg';
import KeplerImage from '../img/Kepler.jpg'; // Átneveztem a jobb olvashatóság kedvéért

function Naprendszer() {
  return (
    <div className="naprendszer-container">
      <header id="napr">
        <h1>A Naprendszer</h1>
        <h3>Egy csillag, és kísérői, a bolygók</h3>
      </header>

      <p>
        A Nap csillag, amely körül kilenc bolygó, néhány százezer kisbolygó és
        számos üstökös kering. Ezek a Nap gravitációs terében fogva tartott
        égitestek alkotják a Naprendszert.
      </p>

      <p>A Naprendszer a Tejúthoz képest ferde síkban helyezkedik el.</p>

      <img src={meretaranyos} alt="A Naprendszer bolygóinak méretarányos összehasonlítása" />
      <p>
        A Naprendszerben keringő bolygók méreteinek összehasonlítása: fent a Nap,
        majd balról jobbra a Merkúr, a Vénusz, a Föld, a Mars, a Jupiter, a
        Szaturnusz, az Uránusz, a Neptunusz és a Plútó látható.
      </p>

      <div className="tudtad">
        <h2>Tudtad?</h2>
        <p>
          A XVIII. században a bolygók naptól való távolságát mérve két német
          csillagász alkotta meg a Titus-Bode-féle szabályt, amely kimondta,
          hogy a bolygók távolsága bizonyos matematikai sorral írható le. A
          Neptunusz és a Plútó távolsága ellentmondott ennek a szabálynak, s így
          az el is veszítette érvényességét.
        </p>
      </div>

      <article>
        <img src={KeplerImage} alt="Johannes Kepler portréja" />
        <h3>Johannes Kepler</h3>
        <p>
          A nagy német csillagász be akarta bizonyítani, hogy a bolygók
          tökéletes kör alakú pályán keringenek a Nap körül, s közben épp azt
          fedezte fel, hogy azok ellipszis alakú pályán keringenek, amelyek
          egyik gyújtópontjában a Nap áll. Ez a felfedezés vezette el Keplert
          az 1609 és 1618 között kimondott három törvénye közül az elsőnek a
          megfogalmazásához. A Kepler-törvények máig is az égi mechanika
          alapját képezik.
        </p>
      </article>

      <h3>Dátumok</h3>
      <ul>
        <li>
          1781-ben az angol William Herschel felfedezett egy Szaturnuszon túli
          bolygót, amely az Uránusz nevet kapta.
        </li>
        <li>
          1846-ban a francia Urbain Le Verrier megadta egy addig ismeretlen,
          Uránuszon túli bolygó pozícióját. A német Johann de Galle ezt meg is
          találta a jelzett helyen. Az új bolygót Neptunusznak nevezték el.
        </li>
        <li>1930-ban az amerikai Clyde Tombaugh felfedezte a Plútót.</li>
        <li>
          1992-ben az amerikai David Jewitt és Jane Luu felfedezte a QB1-et. Ez
          az első transzneptuni (a Plútón túl elhelyezkedő) objektum, amit
          felfedeztünk.
        </li>
      </ul>
    </div>
  );
}

export default Naprendszer;