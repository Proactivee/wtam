import styled from 'styled-components'

import mail from '../../assets/mail.png'
import LinkedIn from '../../assets/linkedin.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 140px;
  padding: 20px;
`

const Mail = styled.img`
  cursor: pointer;
`
const LinkIn = styled.img`
  cursor: pointer;
`

function Contact() {
  const mailto = () => {
    window.location = 'mailto:arnaud.deprost@gmail.com'
  }
  const Linked = () => {
    window.open('https://www.linkedin.com/in/arnaud-deprost-70a671138/')
  }

  return (
    <Container>
      <Mail src={mail} onClick={mailto} />
      <LinkIn src={LinkedIn} onClick={Linked} />
    </Container>
  )
}
export default Contact
