import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
`
const Town = styled(Link)`
  text-decoration:none;
  font-family:'November',sans-serif;
  font-size:30px;
  @media (max-width: 768px) {
    font-size:20px;
  }
  color: black;
  background: linear-gradient(
    156deg,
    rgba(130, 255, 76, 1) 0%,
    rgba(22, 187, 193, 1) 100%
  );
  width: fit-content;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
`
function Cities() {
 
  //const Ilha = () => {
  // window.location = '/wtam/bresil/Ilha'
  // }
  return (
    <Container>
      <Town to={'/wtam/bresil'}>São Paulo</Town>
    </Container>
  )
}

export default Cities

/*
<Town onClick={Ilha}>Ilha Grande</Town>
      <Town>Rio de Janeiro</Town>
      <Town>Iguazù</Town>

      */
