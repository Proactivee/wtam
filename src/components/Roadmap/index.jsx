import styled from 'styled-components'
import amerique from '../../assets/amerique.png'
import asie from '../../assets/asie.png'
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`
const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Btn = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 180px;
  padding: 20px;
  font-family: 'November', sans-serif;
  font-size: 25px;
  text-align: center;
`
const Sur = styled.img`
  height: 800px;
  @media (max-width: 768px) {
    width: 370px;
  }
`
const Asia = styled.img`
  height: 800px;
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 370px;
  }
`
function Roadmap() {
  return (
    <Container>
      <Contain>
        <Btn>Amérique du Sud</Btn>
        <Sur src={amerique} alt="amérique" />
      </Contain>
      <Contain>
        <Btn>Asie</Btn>
        <Asia src={asie} alt="asie" />
      </Contain>
    </Container>
  )
}

export default Roadmap
