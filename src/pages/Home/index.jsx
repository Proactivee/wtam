import styled from 'styled-components'
import CardPays from '../../components/CardPays'
import moi from '../../assets/moi2.png'
import elle from '../../assets/elle.png'
import bag from '../../assets/sac2.jpg'
import zip from '../../assets/zip.png'
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
const Photo2 = styled.img`
  border-radius: 50%;
  width: 150px;
  margin: 20px 20px 0px;
  
`
const Text = styled.p`
  color: white;
  padding-top: 30px;
`
const TextB = styled.p`
  color: white;
  padding-top: 50px;
  text-align: right;
  padding-top: 30px;
  
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
const Zip = styled.h3`
cursor:pointer;
padding: 0px;
white-space:nowrap;

`

function Home() {
  const zipWorld= () => {
    window.location = 'https://www.zip-world.fr/'
  }
  return (
    <Container>
      <CardPays />
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

      <Titre>Préparation</Titre>

      <Presentation>
          <Pres>
            <Photo2 src={bag} alt="Bagage" />
            <Name>Notre Maison</Name>
          </Pres>
          <Text>
             Pour nous accompagner dans ce voyage, nos plus fidèles compagnons sont les DEUTER AirContactLite de 50L, environ 10kg sur le dos. 
             Ils nous permettent d'organiser nos affaires facilement tout en restant confortable.<br/>
             Nous sommes paré pour la montagne avec des affaires techniques : pull merinos, pantalon randonné, gourde...; mais également pour aller flaner dans les rues, jusqu'au bout de la nuit si le cœur nous en dit.
             <h4>Nos Plus Belles Trouvailles :</h4>
             - Veste Imperméable de Randonnée Montagne, MH500, Femme, Quechua  (légère,imperméable,coupe vent)<br/>
             - Sac à dos Pliable et Imperméable 20L , Forclaz  (léger,compact, confortable)<br/>
             - Housse de rangement Trekking, Forclaz (facilite l'organisation du sac, imperméable)
          </Text>
        </Presentation>
        <PresentationBis>
          <Pres>
            <Photo2 src={zip} alt="zip-world" />
            <Name>Nos Vols</Name>
          </Pres>
          <TextB>
             Nous sommes passé par Zip-World, une agence de voyage française, qui nous a accompagner dans notre projet.<br/>
             Bon relationnel, conseil de qualité et s'adapte aux budgets.<br/>
             Merci à eux 😉
             <Zip onClick={zipWorld}>Zip-World</Zip> 
          </TextB>

        </PresentationBis>
        

      <Titre id="rdp" href="#rdp">
        Roadmap
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
