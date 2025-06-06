import {useHistory} from 'react-router-dom'

import {AppContainer,WelcomeHeading, Paragraph,RegisterButton,LoginButton,Container} from './styles.js'

const Welcome = () => {
   const history = useHistory()
    const onClickRegisterBtn = () => {
      history.replace("/signup")
    }

    const onClickLogin = () => {
        history.replace("/login")
    }
 
    return (
       <AppContainer>
        <Container>
        <WelcomeHeading>Welcome to PopX</WelcomeHeading>
        <Paragraph>Lorem ipsim dolor sit amet, consectetur adipiscing elit,</Paragraph>
       <RegisterButton onClick={onClickRegisterBtn}>Create Account</RegisterButton> 
       <LoginButton onClick={onClickLogin}>Already Registered? Login</LoginButton> 
        </Container>
       </AppContainer>
    )
}

export default Welcome