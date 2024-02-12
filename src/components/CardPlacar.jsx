import React from 'react';
import styled from 'styled-components';

const StyledCardPlacar = styled.div`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
    background-color: var(--colorCard_LOGO_ONE);
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    box-sizing:border-box ;

    @media (max-width: 768px) {
        padding: 1rem;
        max-width: 85%;
        margin-bottom: 0 auto;
        margin-top: -10rem;
    }
`;

const Title = styled.h1`
    color: var(--colorNavBar_FONTE_ONE);
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const PlacarItem = styled.div`
    font-size: 1.2rem;
    color: var(--colorNavBar_FONTE_ONE);
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--colorBackground_ONE);
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: var(--colorCard_LOGO_ONE);
    }
`;

const ScoreWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Nome = styled.span`
    font-weight: bold;
    margin-right: 1rem;
`;

const Pontuacao = styled.span`
    margin-right: 1rem;
`;

const Data = styled.span`
    font-size: 0.8rem;
`;

const sortPlacar = (placar) => {
    return placar.sort((a, b) => b.score - a.score); // Ordena o placar em ordem decrescente de pontuação
};

const CardPlacar = ({ placar }) => {
    const placarOrdenado = sortPlacar(placar);
    
    return (
        <StyledCardPlacar>
            <Title>PLACAR</Title>
            {placarOrdenado.map((item, index) => (
                <PlacarItem key={index}>
                    <ScoreWrapper>
                        <Nome>{item.jogador}</Nome>
                        <Pontuacao>{item.score}</Pontuacao>
                    </ScoreWrapper>
                    <Data>{item.data}</Data>
                </PlacarItem>
            ))}
        </StyledCardPlacar>
    );
};

export default CardPlacar;
