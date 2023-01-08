import styled from 'styled-components'
import LogoAm from '../../assets/Logo-AM-100.png'
import Toolsbar from '../Nav'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const TEST = styled.h1`
  font-size: 40px;
  white-space: nowrap;
`
const Contain = styled.div`
  display: flex;
`

const Logo = styled.img`
  object-fit: contain;
  @media (max-width: 768px) {
    width: 60px;
  }
`

function Header() {
  return (
    <Container>
      <Contain>
        <TEST>W.T.AM</TEST>
        <Logo src={LogoAm} alt="logo" />
      </Contain>
      <Toolsbar />
    </Container>
  )
}

export default Header
