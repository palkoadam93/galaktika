import React from 'react';
/*import './App.css';*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ezt importálni kell!

// Komponensek importálása (ellenőrizd a pontos fájlneveket és elérési utakat!)
import Nav from 'components/Nav'; // Feltételezve, hogy így nevezted el a Nav komponenst
import Csillagok from 'components/Csillagok'; // Ellenőrizd a nagybetűt!
import Urutazas from 'components/Urutazas';
import Naprendszer from 'components/Naprendszer';
import Galaxisok from 'components/Galaxisok';

function App() {
  return (
    <Router>

    
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/galaktika" element={<Csillagok />} />
        <Route path="/urutazas" element={<Urutazas />} />
        <Route path="/naprendszer" element={<Naprendszer />} />
        <Route path="/galaxisok" element={<Galaxisok />} />
      </Routes>
      <Csillagok />
    </div>
    </Router>
  );
}

export default App;
