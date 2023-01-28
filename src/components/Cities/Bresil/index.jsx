import styled from 'styled-components'

const Container = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
`
const Town = styled.h3`
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
  const sao = () => {
    window.location = '/wtam/bresil/'
  }
  //const Ilha = () => {
  // window.location = '/wtam/bresil/Ilha'
  // }
  return (
    <Container>
      <Town onClick={sao}>São Paulo</Town>
    </Container>
  )
}

export default Cities

/*
<Town onClick={Ilha}>Ilha Grande</Town>
      <Town>Rio de Janeiro</Town>
      <Town>Iguazù</Town>

      */
