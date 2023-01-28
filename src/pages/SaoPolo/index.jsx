import styled from 'styled-components'
import chili from '../../assets/Card/chili2.jpg'
import ImageSlide from '../../components/Slider'
import Cities from '../../components/Cities/Bresil'

const Container = styled.div``
const Contain = styled.div`
  border-radius: 15px;
  background-color: rgba(41, 41, 41, 0.39);
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const Titre = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 50px;
`
const Choix = styled.h3`
  cursor: pointer;
`
const Text = styled.p`
  text-align: center;
`
const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const pictures = [chili]

function Saopolo() {
  const Rst = () => {
    window.location = '#rst'
  }
  const Hstl = () => {
    window.location = '#hstl'
  }
  const Act = () => {
    window.location = '#act'
  }
  const Tsp = () => {
    window.location = '#tsp'
  }
  return (
    <Container>
      <h1>Brésil</h1>
      <Cities />

      <Contain>
        <Bar>
          <Choix onClick={Rst}>Restaurants </Choix>
          <Choix onClick={Hstl}>Logements </Choix>
          <Choix onClick={Act}>Activités</Choix>
          <Choix onClick={Tsp}>Transports</Choix>
        </Bar>
        <ImageSlide pictures={pictures} />
        <Titre id="rst" href="#rst">
          Restaurants
        </Titre>
        <Titre id="hstl" href="#hstl">
          Logements
        </Titre>
        <Titre id="act" href="#act">
          Activités
        </Titre>
        <Titre id="tsp" href="#tsp">
          Transports
        </Titre>
        <Text>
         
        </Text>
      </Contain>
    </Container>
  )
}
export default Saopolo
