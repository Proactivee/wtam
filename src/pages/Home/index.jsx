import styled from 'styled-components'
import Slider from '../../components/Slider'
import moi from '../../assets/moi2.png'
import elle from '../../assets/elle.png'
import Roadmap from '../../components/Roadmap'
import Follow from '../../components/Follow'

const Container = styled.div``

const Contain = styled.div`
  display: flex;
  flex-direction: column;
`
const Presentation = styled.div`
  display: flex;
  margin: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const PresentationBis = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Photo = styled.img`
  border-radius: 50%;
  width: 150px;
  margin: 20px 20px 0px;
`
const Text = styled.p`
  color: white;
  font-size: 22px;
  padding-top: 30px;
  line-height: 30px;
  margin: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const TextB = styled.p`
  color: white;
  font-size: 22px;
  padding-top: 50px;
  margin: 20px;
  text-align: right;
  padding-top: 30px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const Pres = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`
const Name = styled.h3`
  color: white;
  text-align: center;
  font-size: 22px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`

const Titre = styled.h2`
  margin-top: 20px;
  text-align: center;
`

function Home() {
  return (
    <Container>
      <Slider />
      <Contain>
        <Titre id="qsn" href="#qsn">
          Qui Sommes Nous
        </Titre>
        <Presentation>
          <Pres>
            <Photo src={moi} alt="visage" />
            <Name>ARNAUD</Name>
          </Pres>
          <Text>
            " Plus que quelques jours avant de prendre nos cliques et nos clacs,
            pour découvrir le monde avec notre maison sur le dos.
            <br />
            A la recherche de nouvelles saveurs, mes papilles seront mises à
            l'épreuve !<br />
            Je vous invite à suivre nos péripéties grâce à mon site. "
          </Text>
        </Presentation>
        <PresentationBis>
          <Pres>
            <Photo src={elle} alt="visage" />
            <Name>MARGAUX</Name>
          </Pres>
          <TextB>
            " Bye Bye la Psychiatrie ! Bonjour l'Amazonie ! Me voilà partie pour
            la première fois à l'internationale, j'essaierai de (re)trouver mon
            anglais. <br />
            Impatiente de m'immerger dans de nouvelles cultures et paysages
            époustouflants <br />
            Je serai votre Rédactrice en chef pour le voyage"
          </TextB>
        </PresentationBis>
      </Contain>

      <Titre id="rdp" href="#rdp">
        RoadMap
      </Titre>
      <Roadmap />

      <Titre id="contact" href="#contact">
        Suivez-Nous
      </Titre>
      <Follow />
    </Container>
  )
}
export default Home
