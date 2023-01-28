import styled from 'styled-components'
import angkor from '../../assets/Card/angkor.jpg'
import chili from '../../assets/Card/chili2.jpg'
import ImageSlide from '../../components/Slider'
import Cities from '../../components/Cities/Bresil'

const Container = styled.div``
const Contain = styled.div`
  border-radius: 15px;
  background-color: rgba(41, 41, 41, 0.39);
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const Titre = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 50px;
`
const Text = styled.p`
  text-align: center;
`
const pictures = [angkor, chili]

function Ilha() {
  return (
    <Container>
      <h1>Brésil</h1>
      <Cities />

      <Contain>
        <Titre>Ilha</Titre>
        <ImageSlide pictures={pictures} />
        <Text>
          Vous l'avez devinez notre Roadmap à du être revue en raison des
          mouvement geopolitiques en Amerique du Sud
        </Text>
      </Contain>
    </Container>
  )
}
export default Ilha
