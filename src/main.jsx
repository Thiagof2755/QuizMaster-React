import React from 'react';
import ReactDOM from 'react-dom'; // Importe o ReactDOM corretamente
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Placar from './pages/Placar.jsx';
import Sobre from './pages/Sobre.jsx';
import './index.css';

ReactDOM.render( // Use ReactDOM.render em vez de ReactDOM.createRoot.render
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> {/* Use 'index' para a rota inicial */}
          <Route path="/placar" element={<Placar />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // Adicione o segundo argumento para indicar o ponto de montagem
);
