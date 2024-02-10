import React from 'react'
import styled from 'styled-components'
import CardQuizSelect from '../components/CardQuizSelect'



const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--colorBackground_ONE);
  

`;

const Home = () => {
  return (
    <StyledHome>
      <CardQuizSelect />
    </StyledHome>
    
  )
}

export default Home