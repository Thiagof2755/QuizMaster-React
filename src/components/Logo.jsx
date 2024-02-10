import React from 'react';
import styled from 'styled-components';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const StyledLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--colorCard_LOGO_ONE);
    transition: color 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 1.5rem;

    &:hover {
        color: #fff;
    }
`;

const StyledSVG = styled(BsQuestionSquareFill)`
    font-size: 2.5rem;
    margin-right: 0.5rem;

`;

const Logo = () => {
    return (
        <StyledLogo to="/" style={{ fontFamily: 'Anton' }}>
            <StyledSVG />
            QuizMaster
        </StyledLogo>
    );
};

export default Logo;
