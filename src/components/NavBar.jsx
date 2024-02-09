import React from 'react';
import Buton from './Buton';
import Logo from './Logo';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const StyledNavBar = styled.div`
    height: 75px;
    background-color: #264653;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%; /* Adicionado espaçamento horizontal */

    @media (max-width: 768px) {
      flex-direction: column;
      height: 130px; /* Corrigido o valor */
      max-width: 768px;
      font-size: 14px;
      padding-bottom: 0.5rem; /* Corrigido o nome da propriedade */
      padding-top: 0.5rem;
    }
`;

const BarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 20px;

    @media (max-width: 768px) {
      padding-bottom: 1rem; /* Corrigido o nome da propriedade */
    }
`;

const StyledSVG = styled.div`
    font-size: 2.2rem;  
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
`;

const NavBar = () => {
    return (
        <StyledNavBar>
            <Logo />
            <BarRight>
                <Buton to="/">Home</Buton>
                <Buton to="/sobre">Sobre</Buton>
                <Buton to="/placar">Placar</Buton>
                <StyledSVG>
                    <Buton to="https://github.com/Thiagof2755"><FaGithubSquare /></Buton> 
                    <Buton to="https://www.linkedin.com/in/thiago-alves-396108209/"><FaLinkedin /></Buton> 
                </StyledSVG>
            </BarRight>
        </StyledNavBar>
    );
}

export default NavBar;
