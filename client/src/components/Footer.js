import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 25%;
    margin-top: 1rem;
    background-color: rgb(252, 240, 3);
`;

const Copyright = styled.div`
    font-family: Rokkitt;
    font-size: 1.3rem;
    font-weight: 700;
    color: black;
`;

const Footer = () => {
    return (
        <Container>
            <Copyright>@Copyright</Copyright>
        </Container>
    )
}

export default Footer;