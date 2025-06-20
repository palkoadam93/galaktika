import React from 'react';
/*import './App.css';*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ezt importálni kell!

// Komponensek importálása (ellenőrizd a pontos fájlneveket és elérési utakat!)
import Nav from './components/Nav';
import Csillagok from './components/Csillagok';
import Urutazas from './components/Urutazas';
import Naprendszer from './components/Naprendszer';
import Galaxisok from './components/Galaxisok';

function App() {
  return (
    // itt jelezzük, hogy a repó URL-ben a repó neve után kezdődjön a routing
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Csillagok />} />
        <Route path="/urutazas" element={<Urutazas />} />
        <Route path="/naprendszer" element={<Naprendszer />} />
        <Route path="/galaxisok" element={<Galaxisok />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
