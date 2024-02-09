import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';


const StyledApp = styled.div`

`;

const App = () => (
  <StyledApp>
    <NavBar />
    <Outlet />
  </StyledApp>
);

export default App;