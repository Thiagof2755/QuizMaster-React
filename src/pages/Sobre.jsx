import React from 'react';
import styled from 'styled-components';

const StyledSobre = styled.div`
background: var(--colorBackground_ONE);
width: 100%;
height: 100vh;
`;

const SobreContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;


`;

const Titulo = styled.h2`
  font-size: 2rem;
  color : var(--colorNavBar_FONTE_ONE);
  margin-bottom: 20px;
`;

const Paragrafo = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color : var(--colorNavBar_FONTE_ONE);
`;

const Sobre = () => {
  return (
    <StyledSobre>
    <SobreContainer>
      <Titulo>Sobre</Titulo>
      <Paragrafo>
        O Quiz Master é um aplicativo de quiz interativo desenvolvido em React com Vite que permite aos usuários testarem seus conhecimentos respondendo a uma série de perguntas. Este projeto foi concebido com o objetivo de fornecer uma experiência de teste de conhecimentos e servir como protótipo para projetos de gamificação mais complexos.
      </Paragrafo>
      <Paragrafo>
        O objetivo principal do Quiz Master é servir como uma base para entender o funcionamento de projetos e a lógica por trás dos processos envolvidos. Nele, várias tecnologias são empregadas, como consumo de uma API criada usando Node.js, Express e MongoDB, adaptada para atender às necessidades básicas da interface.
      </Paragrafo>
      <Paragrafo>
        Seja bem-vindo ao Quiz Master e divirta-se desafiando seus conhecimentos!
      </Paragrafo>

      <Titulo>API QuizMaster - README</Titulo>
      <Paragrafo>
        Esta é uma API para criar e gerenciar perguntas e respostas de um quiz.
      </Paragrafo>
      <Paragrafo>
        <strong>Funcionalidades:</strong>
        <ul>
          <li>Obter todas as perguntas</li>
          <li>Criar uma nova pergunta</li>
          <li>Obter um número específico de perguntas aleatórias</li>
          <li>Validar uma resposta fornecida pelo usuário</li>
        </ul>
      </Paragrafo>
      <Paragrafo>
        <strong>Rotas Disponíveis:</strong>
        <ul>
          <li>GET /AllQuestion</li>
          <li>POST /CreateQuestion</li>
          <li>GET /Question</li>
          <li>POST /ValidateAnswer</li>
          <li>GET /AllScores</li>
          <li>POST /CreateScore</li>
        </ul>
      </Paragrafo>
      <Paragrafo>
        <strong>Autor:</strong> Thiago Alves
      </Paragrafo>
      <Paragrafo>
        <strong>Versão:</strong> 1.0.0
      </Paragrafo>
    </SobreContainer>
    </StyledSobre>
  );
};

export default Sobre;
