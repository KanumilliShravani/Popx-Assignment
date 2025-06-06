import styled from 'styled-components'

export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin: 15px;
height: 100vh;
`;

export const SignHeading = styled.h1`
font-size: 34px;
font-weight: 700;
font-family: "Copperplate";
color: rgb(37, 36, 37);
`;

export const FormEle = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

export const InputEleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
border: 1px solid rgb(133, 131, 135);
margin: 10px;
position: relative;
padding: 10px;
border-radius: 6px;
width: 300px;
`;

export const Label = styled.label`
display: inline-block;
position: absolute;
top: -10px;
left: 10px;
right: 200px;
color:rgb(159, 74, 245);
border-top: none;
margin-bottom: 5px;
background-color: white;
`;

export const InputEle = styled.input`
border: none;
outline: none;
`;

export const StarEle = styled.span`
color: red;
`;

export const LabelEle = styled.label`

`;
export const RadioInput = styled.input`
font-size: 20px;
`;

export const RadioContainer = styled.div`
display: flex;
margin-bottom: 20px;
`;

export const ButtonEle = styled.button`
border-radius: 6px;
padding: 4px 8px 8px 4px;
margin: 10px;
background-color: #8a2be2;
border: 2px solid #8a2be2;
color: white;
`;

export const ContainerEle = styled.div`
display: flex;
flex-direction: column;
`