import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
margin: 20px;
`;

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
height: 100vh;
font-family: "Roboto";
`;

export const WelcomeHeading = styled.h1`
font-family: "Roboto;
fonr-size: 36px;
line-height: 1.5;
font-weight: 700;
`;

export const Paragraph = styled.p`
color: grey;
`
;

export const RegisterButton = styled.button`
border-radius: 6px;
padding: 4px 8px 8px 4px;
margin: 10px;
background-color: #8a2be2;
border: 2px solid #8a2be2;
color: white;
`;

export const LoginButton = styled.button`
border-radius: 6px;
padding: 4px 8px 8px 4px;
background-color: #dcc0f6;
border: 2px solid #dcc0f6;
color: black;
font-weight: 500;
margin: 10px;
`;