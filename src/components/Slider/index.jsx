import styled from 'styled-components'
import brs from '../../assets/Slider/bresil2.jpg'
import montagne from '../../assets/Slider/montagne.jpg'
import angkor from '../../assets/Slider/angkor.jpeg'
import machu from '../../assets/Slider/machu.jpg'
import { useState } from 'react'

const Container = styled.div`
  border-radius: 15px;
  transition: 2s;
  left: 0;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`
const Iframe = styled.iframe`
  border: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

const World = styled.h2`
  padding-top: 150px;
`
const Tour = styled.h2``

const Exp = styled.h2`
  padding-bottom: 220px;
`
const slide = [brs, montagne, angkor, machu]

function Slider() {
  const [index, setIndex] = useState(0)

  const Next = () => {
    const LastSlideImage = index === slide.length - 1
    const NextSlide = LastSlideImage ? 0 : index + 1
    setIndex(NextSlide)
  }
  setTimeout(Next, 6500)

  return (
    <Container
      style={{
        backgroundImage: `url(${slide[index]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Center>
        <Iframe
          src="https://free.timeanddate.com/countdown/i8mswkgy/n195/cf12/cm0/cu4/ct4/cs1/cac000/co0/cr0/ss0/cacfff/cpc000/pct/tcfff/fs100/szw1500/szh632/iso2023-01-24T00:00:00"
          allowtransparency="true"
          frameborder="0"
          width="511"
          height="136"
        ></Iframe>
      </Center>
      <div>
        <World>WORLD</World>
        <Tour>TOUR</Tour>
        <Exp>EXPERIENCE</Exp>
      </div>
    </Container>
  )
}

export default Slider
