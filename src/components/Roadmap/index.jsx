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

const Sur = styled.img`
  height: 800px;
  margin-top: 20px;
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 355px;
  }
`
const Asia = styled.img`
  height: 800px;
  border-radius: 25px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 355px;
  }
`
function Roadmap() {
  return (
    <Container>
      <Contain>
        <Sur src={amerique} alt="amérique" />
      </Contain>
      <Contain>
        <Asia src={asie} alt="asie" />
      </Contain>
    </Container>
  )
}

export default Roadmap
