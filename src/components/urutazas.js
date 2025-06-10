// src/components/Urutazas.js
import React from 'react';
import '../style/urutazas.css'; // Hozd létre ezt a CSS fájlt a stílusoknak
import holdra from '../img/holdra.jpg';
import Wernher_von_Braun from '../assets/Urutazas/Wernher_von_Braun.jpg';

function Urutazas() {
  return (
    <div className="urutazas-container">
      <header>
        <h1>Űrutazás és holdraszállás</h1>
        <h3>"Kis lépés egy embernek..."</h3>
      </header>

      <p>
        Az emberiség egyik régi álma volt a holdutazás, s ez 1969-ben
        megvalósult. E nagy teljesítmény véget vetett az Egyesült Államok és a
        Szovjetunió között zajlott csaknem évtizedes versenyfutásnak is, amely
        talán a hidegháborúnál is ádázabb küzdelem volt.
      </p>

      <p>
        Amerika 1957-től kezdve tehetetlenül figyelte a Szovjetunió kiváló
        eredményeit az űrben. Miután az oroszok pályára bocsátották az első
        műholdat, 1959-ben ismét ők voltak az elsők, akik fényképeket
        készítettek a Hold túlsó feléről, s 1961. április 12-én, Jurij Gagarin
        személyében ők küldték fel az első embert Föld körüli pályára.
      </p>

      <img src={holdra} alt="Holdraszállás" />
      <p>
        1969 márciusában az Apollo-9 egy Föld körüli úton tesztelte a holdkomp
        megbízhatóságát, és május 18-án a Saturn-V hordozórakéta Hold körüli
        pályára állította az Apollo-10-et egy végső, mindenre kiterjedő ismétlés
        céljából. Mire 1969. július 16-án útnak indították az Apollo-11-et,
        addigra a küldetés miden szakaszát ellenőrizték, kivéve egyet: magát a
        Holdra szállást.
      </p>

      <article>
        <img src={Wernher_von_Braun} alt="Wernher von Braun" />
        <h3>Wernher von Braun</h3>
        <p>
          Kamaszkorától kezdve szenvedélyesen érdekelte a világűr meghódítása.
          1932-ben beállt a német hadseregbe, és részt vett a rakétamotorok
          fejlesztését célzó kutatómunkában, amely végül a borzalmas V2 rakéták
          megalkotásához vezetett. A második világháború végén ezekkel bombázták
          Londont. 1945-ben az amerikaiak "megszerezték maguknak" a tudóst, aki
          egyik vezetője lett annak a kutatócsoportnak, amely létrehozta az
          Apollo-program sikerét megalapozó Saturn-V hordozórakétát.
        </p>
      </article>

      <div className="tudtad">
        <h2>Tudtad?</h2>
        <p>Armstrong és Aldrin voltak az elsők 1969 júliusában, akik a Holdra léptek.</p>
      </div>
    </div>
  );
}

export default Urutazas;