import React from 'react';
import styled from 'styled-components';
import QuizCard from './QuizCard';
import { useState } from 'react';

const StyledCardQuizSelect = styled.div`
    width: 345px;
    height: 300px;
    border-radius: 10px;
    background-color: var(--colorCard_LOGO_ONE);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-top: -50%;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')}; /* Adiciona visibilidade baseada na propriedade 'visible' */


    .h1 {
        color: var(--colorNavBar_FONTE_ONE);
        font-size: 36px;
    }

    .p {
        color: var(--colorNavBar_FONTE_ONE);
        font-size: 20px;
        margin-bottom: 1rem; /* Adiciona espaço entre o parágrafo e o input */
    }

    .input {
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        box-sizing: border-box;
    }
    .button {
        background-color: var(--colorBackground_ONE);
        color: var(--colorNavBar_FONTE_ONE);
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 16px;
        cursor: pointer;
        margin-top: 1rem;
        transition: background-color 0.3s ease-in-out;

    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin: auto, 0;
        box-sizing: border-box;
        margin-top: -250px;
    }
`;

const CardQuizSelect = () => {
    const [name, setName] = useState('');
    const [showQuiz, setShowQuiz] = useState(false); // Novo estado para controlar a visibilidade do componente

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = () => {
        setShowQuiz(true); // Mostra o QuizCard quando o formulário é enviado
    };

    return (
        <div>
            <StyledCardQuizSelect visible={!showQuiz}> {/* Define a visibilidade com base no estado 'showQuiz' */}
                <h1 className="h1">Bem-vindo</h1>
                <p className='p'>Digite seu nome</p>
                <input className="input" type="text" placeholder="Seu nome" value={name} onChange={handleInputChange} />
                <button className="button" onClick={handleSubmit}>Entrar</button>
            </StyledCardQuizSelect>
            {showQuiz && <QuizCard nome={name} />} {/* Renderiza o QuizCard apenas se 'showQuiz' for true */}
        </div>
    );
}

export default CardQuizSelect;