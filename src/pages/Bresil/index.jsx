import styled from 'styled-components'
import un from '../../assets/Bresil/1.jpg'
import deux from '../../assets/Bresil/2.jpg'
import trois from '../../assets/Bresil/3.jpg'
import quatre from '../../assets/Bresil/4.jpg'
import cinq from '../../assets/Bresil/5.jpg'
import six from '../../assets/Bresil/6.jpg'
import sept from '../../assets/Bresil/7.jpg'
import huit from '../../assets/Bresil/8.jpg'

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
const Text = styled.p`
  text-align: center;
`

const pictures = [un, deux,trois,quatre,cinq,six,sept,huit]

function Bresil() {
  
  return (
    <Container>
      <h1>Brésil</h1>
      <Cities />

      <Contain>
        <ImageSlide pictures={pictures} />
        
      </Contain>
    </Container>
  )
}
export default Bresil

//<Titre>Nos Astuces</Titre>