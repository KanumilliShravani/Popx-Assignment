import {ProfileContainer,Heading,Image,Container,NameFeild,EmailFeild  } from './styles.js'

const Profile = () => {

    return(
     <ProfileContainer>
      <Heading>Account Settings</Heading>
      <Container>
      <Image src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1749139347/cute-woman-avatar-profile-vector-illustration_1058532-14592_rcbele.jpg"  alt="profile"/>
      <ProfileContainer>
      <NameFeild>Mary Doe</NameFeild>
      <EmailFeild>MaryDoe@gmail.com</EmailFeild>
      </ProfileContainer>
      </Container>
      <EmailFeild>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadpiscing Elitr, Sed Diam Nonumy Eirmod Tempor invidunt Ut 
        labore Et Dolore Magna Aliquyam erat,Sed Diam.
      </EmailFeild>
     </ProfileContainer>
    )
}


export default Profile