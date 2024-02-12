import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StyledQuizCard = styled.div`
    width: 345px;
    height: 300px;
    border-radius: 10px;
    background-color: var(--colorCard_LOGO_ONE);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin: 0 auto;
    color: #264653;
    margin-top: -50%;

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
        margin-top: -100%;
        width: 90%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;

    }
`;

const QuestionContainer = styled.div`
    margin-bottom: 20px;
`;

const Question = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
`;

const OptionsList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const OptionItem = styled.li`
    margin-bottom: 10px;
`;

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

const QuizCard = (props) => {
    const nome = props.nome
    const [quiz, setQuiz] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const navigate = useNavigate(); // Obtendo o objeto de histórico

    const Url_Get_Quiz = import.meta.env.VITE_API_URL_GET_QUESTION;
    const Url_Validate_Answer = import.meta.env.VITE_API_URL_VALIDATE_ANSWER;
    const Url_Post_Score = import.meta.env.VITE_API_URL_POST_SCORE;

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

    const handleAnswer = async (answerIndex) => {
        setAnswers([...answers, {
            id: quiz[currentQuestionIndex]._id,
            resposta: quiz[currentQuestionIndex].opcoes[answerIndex]
        }]);
        await validateAnswer(answerIndex);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (currentQuestionIndex === quiz.length - 1) {
            setShowResult(true);
        }
    };

    const saveScore = async () => {
        try {
            const response = await fetch(Url_Post_Score, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    jogador: nome,
                    categoria: 1,
                    score: correctAnswersCount
                })
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro ao salvar score:', error);
        }
        Swal.fire({
            title: "Player Score",
            text: "Placar salvo",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        // Redirecionamento após 3 segundos (3000 milissegundos)
        setTimeout(() => {
            navigate('/placar'); // Redirecionando para a página de placar
        }, 3000);
    };

    useEffect(() => {
        getQuiz();
    }, []);

    return (
        <StyledQuizCard>
            {isLoading && <p>Carregando...</p>}
            {!showResult && quiz.length > 0 && currentQuestionIndex < quiz.length && !isLoading && (
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
            {showResult && (
                <div>
                    <h2>Obrigado por responder!</h2>
                    <p>{nome}</p>
                    <p>Total de respostas corretas: {correctAnswersCount}</p>
                    <button className="button" onClick={saveScore}>Salvar</button>
                </div>
            )}
        </StyledQuizCard>
    );
};

export default QuizCard;
