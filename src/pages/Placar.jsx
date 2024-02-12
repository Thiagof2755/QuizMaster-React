import React, { useState, useEffect } from 'react';
import CardPlacar from '../components/CardPlacar';
import styled from 'styled-components';

const StyledPlacar = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: var(--colorBackground_ONE);
margin: 0 auto;
padding: 0 auto;
box-sizing: border-box;
`;

const Placar = () => {
  const Url_Get_AllScore = import.meta.env.VITE_API_URL_GET_SCORE;
  const [placar, setPlacar] = useState([]);

  const getPlacar = async () => {
    try {
      const response = await fetch(Url_Get_AllScore);
      if (!response.ok) {
        throw new Error('Falha ao buscar placar');
      }
      const data = await response.json();
      setPlacar(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPlacar();
  }, []);

  return (
    <StyledPlacar>
    <CardPlacar placar={placar} />
    </StyledPlacar>
  )
}

export default Placar;