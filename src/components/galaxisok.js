// src/components/Galaxisok.js
import React from 'react';
import '../style/galaxisok.css'; // Hozd létre ezt a CSS fájlt a stílusoknak
import Spiral_Galaxy_NGC_1232 from '../img/Spiral_Galaxy_NGC_1232.jpg';
import galaxistipusok from '../img/galaxistipusok.jpg';
import Hubble from '../img/Hubble.jpg';

function Galaxisok() {
  return (
    <div className="galaxisok-container">
      <header>
        <h1>A galaxisok</h1>
        <h3>Anyagszigetek a világegyetemben</h3>
      </header>

      <p>
        A galaxisokban születnek, élnek és halnak meg a csillagok. Ahogy a
        Világegyetem egyre tágul, ezek a magányos anyagszigetek a Világegyetem
        tágulásának mértékében egyre távolodnak egymástól, egy jobbára üres
        térben.
      </p>

      <p>A kannibál galaxisok úgy alakulnak ki, hogy elnyelik a kisebb galaxisokat.</p>

      <img src={Spiral_Galaxy_NGC_1232} alt="Spirálgalaxis NGC 1232" />
      <p>
        A mintegy 100 fényévre lévő, NGC 1232 nevű spirálgalaxis karjai a
        középen ragyogó mag köré tekerednek, amely a galaxis tömegének nagyobb
        részét tartalmazza.
      </p>

      <img src={galaxistipusok} alt="Galaxis típusok Edwin Hubble osztályozása szerint" />
      <p>
        1936-ban Hubble a fenti osztályokba sorolta a galaxisokat. Akkoriban azt
        gondolta, hogy a galaxisok a legegyszerűbb (elliptikus) formából
        fejlődnek a bonyolultabb (spirális) forma felé. Ma az asztrofizikusok
        azt állítják, hogy éppen fordítva van: a galaxisok spirálisnak (a
        kisebbek szabálytalannak) születnek, s ezekből keletkeznek
        összeolvadás (fúzió) közben az elliptikus galaxisok.
      </p>

      <article>
        <img src={Hubble} alt="Edwin Hubble portréja" />
        <h3>Edwin Hubble</h3>
        <p>
          Tagadhatatlan, hogy ő volt a XX. század legnagyobb csillagásza.
          1924-ben az amerikai csillagász bebizonyította, hogy léteznek
          galaxisok a mi Galaxisunkon kívül is. Öt évvel később megmérte
          ezek távolodási sebességét, s ezzel bebizonyította a Világegyetem
          tágulását.
        </p>
      </article>

      <h3>Kulcsszavak</h3>
      <ul>
        <li>
          Fényév - távolodás mérésére szolgáló egység, vagyis az a távolság,
          amelyet a fény egy év alatt befut. Egy fényév közelítőleg egyenlő 10
          billió km-rel (10<sup>13</sup> km).
        </li>
        <li>
          Kidudorodás - egy spirálgalaxis középponti része, amely igen sűrű.
          Benne a legidősebb és a kevésbé fényes csillagok helyezkednek el.
        </li>
        <li>
          Spirálkarok - egy spirálgalaxis karjaiban van a legtöbb csillag, s
          ezek a legfiatalabbak és a legragyogóbbak is egyben.
        </li>
      </ul>

      <h3>Számok</h3>
      <ul>
        <li>
          A Nap 250 km/s sebességgel kb. 220 millió év alatt járja körül
          Galaxisunkat.
        </li>
        <li>
          A Nap nagyjából 30 000 fényévnyi távolságra van a Tejút
          középpontjától.
        </li>
        <li>
          A Tejút korongjának átmérője körülbelül 100 000 fényév, vastagsága 1000
          fényév.
        </li>
      </ul>

      <div className="tudtad">
        <h2>Tudtad?</h2>
        <p>
          A Tejút kifejezés ugyanabból a szóból származik, mint a galaxis,
          mindkettő a görög galaktosz (tej) szóból ered. Egyébként a
          csillagászok a távcső felfedezéséig - azaz a XVII. századig - a Tejutat
          csak egy fehér felhőnek tekintették.
        </p>
      </div>
    </div>
  );
}

export default Galaxisok;