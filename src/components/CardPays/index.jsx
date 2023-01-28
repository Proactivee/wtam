import styled from 'styled-components'

import rio from '../../assets/Card/bresil2.jpg'
import chiligrey from '../../assets/Card/chiligrey.png'
import boliviegrey from '../../assets/Card/boliviegrey.png'
import vietnamgrey from '../../assets/Card/vietnamgrey.png'
import laosgrey from '../../assets/Card/laosgrey.png'
import camgrey from '../../assets/Card/camgrey.png'

const Container = styled.div`
  border-radius: 15px;
`

const World = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
const Contain = styled.div`
  padding: 10px;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`
const Pays = styled.div`
  background-color: #9e2c2c;
  padding-top: 50px;
  width: 400px;
  height: 400px;
  text-align: center;
  margin: 10px;
  border-radius: 25px;

  color: black;
  font-family: 'November', sans-serif;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`
const Pays1 = styled.div`
  background-color: #9e2c2c;
  padding-top: 50px;
  width: 400px;
  height: 400px;
  text-align: center;
  margin: 10px;
  border-radius: 25px;
  cursor: pointer;

  color: white;
  font-family: 'November', sans-serif;
  font-size: 70px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

function Slider() {
  const bresil = () => {
    window.location = 'wtam/bresil'
  }
  return (
    <Container>
      <World>WORLD TOUR EXPERIENCE</World>
      <Contain>
        <Pays1
          style={{
            backgroundImage: `url(${rio})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          onClick={bresil}
        >
          Brésil
        </Pays1>
        <Pays
          style={{
            backgroundImage: `url(${boliviegrey})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          Bolivie
        </Pays>
        <Pays
          style={{
            backgroundImage: `url(${chiligrey})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          Chili
        </Pays>
        <Pays
          style={{
            backgroundImage: `url(${vietnamgrey})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          Vietnam
        </Pays>
        <Pays
          style={{
            backgroundImage: `url(${laosgrey})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          Laos
        </Pays>
        <Pays
          style={{
            backgroundImage: `url(${camgrey})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          Cambodge
        </Pays>
      </Contain>
    </Container>
  )
}

export default Slider
