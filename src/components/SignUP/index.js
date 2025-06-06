import {Component} from 'react'

import { SignUpContainer,RadioInput,SignHeading,ContainerEle,FormEle,InputEleContainer,Label,InputEle,StarEle,LabelEle,RadioContainer,ButtonEle } from './styles'

class SignUP extends Component{

  onSubmitForm = event => {
    event.preventDefault()
    const {history} = this.props 
    history.replace("/profile")
  }
  
    render (){
     
        return (
          <SignUpContainer>
           <SignHeading>Create your PopX account</SignHeading>
           <FormEle onClick={this.onSubmitForm}>
            <ContainerEle>
            <InputEleContainer>
            <Label htmlFor='fullname'>Full Name<StarEle>*</StarEle></Label>
            <InputEle id="fullname" required={true} type="text"/>
            </InputEleContainer>
            <InputEleContainer>
            <Label htmlFor='phonenumber'>Phone Number<StarEle>*</StarEle></Label>
            <InputEle id="phonenumber" required={true}  type="text"/>
            </InputEleContainer>
            <InputEleContainer>
            <Label htmlFor='email'>Email Address<StarEle>*</StarEle></Label>
            <InputEle id="email" required={true} type="text"/>
            </InputEleContainer>
            <InputEleContainer>
            <Label htmlFor='password'>Password<StarEle>*</StarEle></Label>
            <InputEle id="password" required={true} type="text"/>
            </InputEleContainer>
            <InputEleContainer>
            <Label htmlFor='companyname'>Company name</Label>
            <InputEle id="companyname"  type="text"/>
            </InputEleContainer>
            <LabelEle>Are you an agency?<StarEle>*</StarEle></LabelEle>
            <RadioContainer>
            <RadioInput type="radio"/>
             <LabelEle>Yes</LabelEle>
               <RadioInput type="radio"/>
              <LabelEle>No</LabelEle>
              </RadioContainer>
           </ContainerEle>
            <ButtonEle type="submit">Create Account</ButtonEle>
           </FormEle>
           
          </SignUpContainer>
        )

    }
}

export default SignUP