import styled from 'styled-components'

export const LoginContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: flex-start;
 margin: 20px;
`;

export const LoginHeading = styled.h1`
font-size: 32px;

`;

export const Paragraph = styled.p`
color: grey;
`;

export const FormEle = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

export const InputContainer = styled.div`
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
margin-bottom: 20px;
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
color:rgb(154, 154, 157) ;
`;

export const LoginButton = styled.button`
padding: 4px 8px 4px 8px;
border-radius: 6px;
background-color: rgb(154, 154, 157);
border: 1px solid rgb(154, 154, 157);
color: white;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
`;