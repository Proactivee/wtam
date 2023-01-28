import styled from 'styled-components'
import LogoR from '../../assets/react_small.png'
import LogoAm from '../../assets/Logo-AM-100.png'
import Contact from '../Contact'

const Container = styled.footer`
  background-color: #4141411f;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const React = styled.p`
  color: white;
  white-space: nowrap;
  padding-top: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`
const LogReact = styled.img`
  object-fit: contain;
`
const Contain = styled.div`
  display: flex;
  margin-left: 10px;
`
const Logo = styled.img`
  object-fit: contain;
  @media (max-width: 768px) {
    width: 60px;
  }
`
function Footer() {
  return (
    <Container id="footer" href="#footer">
      <Contain>
        <React>Made with</React>
        <LogReact src={LogoR} alt="logo-React" />
      </Contain>
      <Logo src={LogoAm} alt="logo" />
      <Contact />
    </Container>
  )
}

export default Footer
