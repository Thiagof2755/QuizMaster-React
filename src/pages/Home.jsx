import React from 'react'
import styled from 'styled-components'
import CardQuizSelect from '../components/CardQuizSelect'
import QuizCard from '../components/QuizCard';


const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2a9d8f;
  

`;

const Home = () => {
  return (
    <StyledHome>
      <QuizCard />
    </StyledHome>
    
  )
}

export default Home