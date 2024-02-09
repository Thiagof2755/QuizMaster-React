import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Estilização do componente de cartão do quiz
const StyledQuizCard = styled.div`
    width: 400px;
    border-radius: 10px;
    background-color: #e9c46a;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    color: #264653;
`;

// Container para a pergunta
const QuestionContainer = styled.div`
    margin-bottom: 20px;
`;

// Estilização da pergunta
const Question = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

// Lista de opções
const OptionsList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

// Item de opção
const OptionItem = styled.li`
    margin-bottom: 10px;
`;

// Botão de opção
const OptionButton = styled.button`
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #e76f51;
    }
`;

// Componente do quiz
const QuizCard = () => {
    const [quiz, setQuiz] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // URL para obter o quiz
    const Url_Get_Quiz = import.meta.env.VITE_API_URL_GET_QUESTION;
    const Url_Validate_Answer = import.meta.env.VITE_API_URL_VALIDATE_ANSWER;

    // Função para obter o quiz
    const getQuiz = async () => {
        try {
            const response = await fetch(Url_Get_Quiz);
            if (!response.ok) {
                throw new Error('Falha ao buscar perguntas do quiz');
            }
            const data = await response.json();
            setQuiz(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Função para validar a resposta
    const validateAnswer = async (answerIndex) => {
        setIsLoading(true);
        try {
            const response = await fetch(Url_Validate_Answer, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: quiz[currentQuestionIndex]._id,
                    resposta: quiz[currentQuestionIndex].opcoes[answerIndex]
                })
            });
            const data = await response.json();
            if (data.message === "Resposta correta!") {
                setCorrectAnswersCount(correctAnswersCount + 1);
            }
        } catch (error) {
            console.error('Erro ao validar resposta:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Função para lidar com a resposta
    const handleAnswer = (answerIndex) => {
        setAnswers([...answers, {
            id: quiz[currentQuestionIndex]._id,
            resposta: quiz[currentQuestionIndex].opcoes[answerIndex]
        }]);
        validateAnswer(answerIndex);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    useEffect(() => {
        getQuiz();
    }, []);

    return (
        <StyledQuizCard>
            {isLoading && <p>Carregando...</p>}
            {quiz.length > 0 && currentQuestionIndex < quiz.length && !isLoading && (
                <QuestionContainer>
                    <Question>{quiz[currentQuestionIndex].pergunta}</Question>
                    <OptionsList>
                        {quiz[currentQuestionIndex].opcoes.map((option, optionIndex) => (
                            <OptionItem key={optionIndex}>
                                <OptionButton onClick={() => handleAnswer(optionIndex)}>{option}</OptionButton>
                            </OptionItem>
                        ))}
                    </OptionsList>
                </QuestionContainer>
            )}
            {currentQuestionIndex === quiz.length && (
                <div>
                    <h2>Obrigado por responder!</h2>
                    <p>Total de respostas corretas: {correctAnswersCount}</p>

                </div>
            )}
        </StyledQuizCard>
    );
};

export default QuizCard;
