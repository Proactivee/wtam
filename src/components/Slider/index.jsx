import { useState } from 'react'
import styled from 'styled-components'
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'
import SmallArrowLeft from '../../assets/SmallArrowLeft.png'
import SmallArrowRight from '../../assets/SmallArrowRight.png'

const LeftArrows = styled.img`
  object-fit: none;
  cursor: pointer;
  position: relative;
  padding-left: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

const RightArrows = styled.img`
  object-fit: none;
  cursor: pointer;
  position: relative;
  padding-right: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`
const SmallArrowLef = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    object-fit: none;
    cursor: pointer;
    width: 50px;
  }
`
const SmallArrowRigh = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    object-fit: none;
    cursor: pointer;
    width: 50px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SlideContainer = styled.div`
  background-size: cover;
  background-position: center;
  width: 90%;
  border-radius: 25px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 255px;
  }
`

function ImageSlide({ pictures }) {
  const [index, setIndex] = useState(0)

  const Previous = () => {
    const FirstSlideImage = index === 0
    const PreviousSlide = FirstSlideImage ? pictures.length - 1 : index - 1
    setIndex(PreviousSlide)
  }

  const Next = () => {
    const LastSlideImage = index === pictures.length - 1
    const NextSlide = LastSlideImage ? 0 : index + 1
    setIndex(NextSlide)
  }

  const OnePicture = pictures.length === 1

  return OnePicture ? (
    <Container>
      <SlideContainer
        style={{ backgroundImage: `url(${pictures[index]})` }}
      ></SlideContainer>
    </Container>
  ) : (
    <Container>
      <SlideContainer style={{ backgroundImage: `url(${pictures[index]})` }}>
        <LeftArrows src={LeftArrow} alt="left-arrow" onClick={Previous} />
        <SmallArrowLef
          src={SmallArrowLeft}
          alt="Arrow-Left"
          onClick={Previous}
        />
        <RightArrows src={RightArrow} alt="Right-arrow" onClick={Next} />
        <SmallArrowRigh
          src={SmallArrowRight}
          alt="Arrow-right"
          onClick={Next}
        />
      </SlideContainer>
    </Container>
  )
}

export default ImageSlide
