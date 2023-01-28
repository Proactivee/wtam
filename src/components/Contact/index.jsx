import styled from 'styled-components'
import insta from '../../assets/insta.png'
import mail from '../../assets/mail.png'
import LinkedIn from '../../assets/linkedin.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 200px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 150px;
    padding-top: 40px;
  }
`

const Mail = styled.img`
  cursor: pointer;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
const LinkIn = styled.img`
  cursor: pointer;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
const Insta = styled.img`
  cursor: pointer;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

function Contact() {
  const mailto = () => {
    window.location = 'mailto:arnaud.deprost@gmail.com'
  }
  const Linked = () => {
    window.open('https://www.linkedin.com/in/arnaud-deprost-70a671138/')
  }
  const instag = () => {
    window.open('https://www.instagram.com/w.t.am/?hl=fr')
  }

  return (
    <Container>
      <Mail src={mail} onClick={mailto} />
      <LinkIn src={LinkedIn} onClick={Linked} />
      <Insta src={insta} alt="instagram" onClick={instag} />
    </Container>
  )
}
export default Contact
