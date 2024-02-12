import React from 'react';
import Buton from './Buton';
import Logo from './Logo';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin, FaPaintRoller } from "react-icons/fa";

const StyledNavBar = styled.div`
  height: 75px;
  background-color: var(--colorNavBar_FONTE_ONE);
  color: ${({ theme }) => theme.colorNavBarFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 130px;
    max-width: 768px;
    font-size: 12px;
    padding-bottom: 0.5rem;
    
    padding-top: 0.5rem;
  }
`;

const BarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 20px;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

const StyledSVG = styled.div`
  font-size: 2.2rem;
  display: flex;
  gap: 0.5rem;

  .Temas {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--colorCard_LOGO_ONE);
    font-size: 20px;
    align-items: center;
    font-family: 'Anton';

    a:hover {
      color: var(--colorBackground_ONE);
    }

    @media (max-width: 768px) {
      margin: 0;
      padding: 0;
      font-size: 20px;
    }
  }
`;

const NavBar = ({ theme, toggleTheme }) => {
  return (
    <StyledNavBar theme={theme}>
      <Logo />
      <BarRight>
        <Buton to="/">Home</Buton>
        <Buton to="/sobre">Sobre</Buton>
        <Buton to="/placar">Placar</Buton>
        <StyledSVG>
          <button className='Temas' onClick={toggleTheme}><FaPaintRoller /> </button>
          <Buton to="https://github.com/Thiagof2755"><FaGithubSquare /></Buton>
          <Buton to="https://www.linkedin.com/in/thiago-alves-396108209/"><FaLinkedin /></Buton>
        </StyledSVG>
      </BarRight>
    </StyledNavBar>
  );
}

export default NavBar;