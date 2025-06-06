import {useHistory} from 'react-router-dom'

import {LoginContainer,LoginHeading, Paragraph,FormEle,InputContainer,Label,InputEle,LoginButton ,Container} from './styles.js'


const Login = () => {
   
  const history = useHistory()

  const onSubmitForm = event => {
    event.preventDefault()
    history.replace("/profile")
  }
  
        return (
          <LoginContainer>
           <LoginHeading>Signin to your PopX account</LoginHeading>
           <Paragraph>Lorem ipsim dolor sit amet, consectetur adipiscing elit,</Paragraph>
           <FormEle onClick={onSubmitForm}>
            <Container>
            <InputContainer>
            <Label htmlFor='email'>Email Address</Label>
            <InputEle id="email"  type="text" placeholder="Enter email address" />
            </InputContainer>
            <InputContainer>
            <Label htmlFor='password' >Password</Label>
            <InputEle id="password"  type="password" placeholder="Enter password" />
            </InputContainer>
            </Container>
            <LoginButton type="submit">Login</LoginButton>
           </FormEle>
          </LoginContainer>
        )
  
}

export default Login 