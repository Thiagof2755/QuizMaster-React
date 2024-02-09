import React from 'react';
import styled from 'styled-components';

const StyledCardQuizSelect = styled.div`
    width: 345px;
    height: 300px;
    border-radius: 10px;
    background-color: #e9c46a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-top: -5rem;


    .h1 {
        color: #264653;
        font-size: 36px;
    }

    .p {
        color: #264653;
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
        background-color: #264653;
        color: #ffff;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 16px;
        cursor: pointer;
        margin-top: 1rem;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: #fff;
            color: #264653;
        }
    }
`;

const CardQuizSelect = () => {
    return (
        <StyledCardQuizSelect>
            <h1 className="h1">Bem-vindo</h1>
            <p className='p'>Digite seu nome</p>
            <input className="input" type="text" placeholder="Seu nome" />
            < button className="button" >Entrar</button>
        </StyledCardQuizSelect>
    );
}

export default CardQuizSelect;
