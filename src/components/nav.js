// src/components/Navigacio.js
import React from 'react';
import { Link } from 'react-router-dom'; // Feltételezzük, hogy használsz React Routert a navigációhoz

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Csillagok</Link>
        </li>
        <li>
          <Link to="/urutazas">Űrutazás</Link>
        </li>
        <li>
          <Link to="/naprendszer">Naprendszer</Link>
        </li>
        <li>
          <Link to="/galaxisok">Galaxisok</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;