import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: #fff;
    display: flex;
    font-family: 'Anton'; 

`;

const Buton = ({ to, size, children, newTab }) => {
    const isExternalLink = /^https?:\/\//.test(to); // Verifica se o link é externo

    if (isExternalLink && newTab) {
        return (
            <StyledLink href={to} target="_blank" rel="noopener noreferrer" size={size}>
                {children}
            </StyledLink>
        );
    }

    return (
        <RouterLink to={to} size={size}>
            {children}
        </RouterLink>
    );
};

Buton.defaultProps = {
    newTab: true, // Por padrão, abre em uma nova aba
};

export default Buton;
