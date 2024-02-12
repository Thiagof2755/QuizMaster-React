// App.js

import React, { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';

const lightTheme = {
  colorNavBarFont: '#264653',
  colorBackground: '#F4F1DE',
  colorCardLogo: '#E76F51',
  colorPaintRoller: '#F4F1DE'
};

const darkTheme = {
  colorNavBarFont: '#F4F1DE',
  colorBackground: '#1D3557',
  colorCardLogo: '#457B9D',
  colorPaintRoller: '#264653'
};

const StyledApp = styled.div`
  --colorNavBar_FONTE_ONE: ${({ theme }) => theme.colorNavBarFont};
  --colorBackground_ONE: ${({ theme }) => theme.colorBackground};
  --colorCard_LOGO_ONE: ${({ theme }) => theme.colorCardLogo};
  --colorPaintRoller_ONE: ${({ theme }) => theme.colorPaintRoller};

  a {
    color: ${({ theme }) => theme.colorCardLogo};
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colorBackground};
  }
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  // Definindo a função toggleTheme
  const toggleTheme = () => {
    // Chamando a função setTheme que atualiza o estado do tema
    // A função recebe como argumento uma função que tem como parâmetro o tema atual (prevTheme)
    setTheme(prevTheme => (
      // Se o tema atual é o tema claro, retorna o tema escuro, caso contrário, retorna o tema claro
      // Isso efetivamente alterna o tema entre claro e escuro
      prevTheme === lightTheme ? darkTheme : lightTheme
    ));
  };
  return (
    <StyledApp theme={theme}>
      <NavBar toggleTheme={toggleTheme} />
      <Outlet />
    </StyledApp>
  );
};

export default App;
