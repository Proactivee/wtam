import styled from 'styled-components'
import { Link } from 'react-router-dom'
import a from '../../assets/Bresil/paraty/a.jpeg'
import b from '../../assets/Bresil/paraty/1.jpeg'
import c from '../../assets/Bresil/paraty/2.jpeg'
import d from '../../assets/Bresil/paraty/3.jpeg'
import e from '../../assets/Bresil/paraty/4.jpeg'
import f from '../../assets/Bresil/paraty/5.jpeg'
import g from '../../assets/Bresil/paraty/6.jpeg'
import h from '../../assets/Bresil/paraty/7.jpeg'
import i from '../../assets/Bresil/paraty/8.jpeg'
import j from '../../assets/Bresil/paraty/9.jpeg'

import ImageSlide from '../../components/Slider'
import Cities from '../../components/Cities/Bresil'
import "../../utils/style/Swipe.css"



const Container = styled.div``


const LinkBresil = styled(Link)`
 color:white;
  font-family:'November',sans-serif;
  font-size:80px;
  display:flex;
  justify-content:center;
  margin-top: 10px;
  margin-bottom: 20px; 
  text-decoration:none;
`
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
  padding: 10px;
`
const Text = styled.p`
  text-align: center;
`
const Para=styled.p`
margin-left:30px;
margin-right:30px;
`
const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Intro = styled.p`
padding:15px;
`

const pictures = [a]


function Paraty() {

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
  const Gal = () => {
    window.location = '#gal'
  }
  return (
    <Container>
      <LinkBresil to={'/wtam/bresil'}>Brésil</LinkBresil>
      <Cities />

      <Contain>
        <Intro>Paraty est une ville côtière dans l'état de Rio de Janeiro. Une ville coloniale qui a conservé ses rues et ses monuments d'époques. Les pavés qui ornent
la ville ont été apportés par les colonisateurs portugais lorsqu'ils vidaient les cales des bateaux pour les remplir d'or. Sur les hauteurs, un fort a été bâti pour 
défendre la ville des envahisseurs.
Aujourd'hui, Paraty est une ville restaurée en harmonie avec son passé. 
Nous avons apprécié nous promener dans ses ruelles et arpenter 
les différents magasins et restaurants durant ces deux jours.
</Intro>
      <ImageSlide pictures={pictures} />


        <Bar>
          <Choix onClick={Hstl}>Logements </Choix>
          <Choix onClick={Rst}>Restaurants </Choix>
          <Choix onClick={Act}>Activités</Choix>
          <Choix onClick={Tsp}>Transports</Choix>
          <Choix onClick={Gal}>Galerie</Choix>
        </Bar>

        <Titre id="hstl" href="#hstl">
          Logements
        </Titre>
        <Para>
        
          Nous avons logé au même endroit car Paraty est une petite ville.<br/>
          Budget : 30€/nuit/2personnes <br/>

        <strong>Hostel Che Lagarto</strong>: Che Lagarto est une chaine d'auberge brésilienne.Les parties communes sont confortables avec piscine, facilitant les rencontres entre voyageurs. 

      
        </Para>
       
        <Titre id="rst" href="#rst">
          Restaurants
        </Titre>
        <Para>
 

<strong>Tempero Paraty Restaurante</strong>, prix petit à moyen, cusinie brésilienne, pour partager une belle pièce de viande, repas copieux .<br/>

<strong>Thai Brasil</strong>, prix chic, cuisine Thailandaise, de délicieux plats épicés servis dans un cadre coloré à l'écart des regards indiscrets.
Attention à la Caipirinha Lemon 🤯.<br/>


           </Para>
           
           
        <Titre id="act" href="#act">
          Activités
        </Titre>
        <Para>
        
Visite de la ville et shopping.<br/>

Balade jusqu'au fort.<br/>

Après-midi plage. Notre plage préférée : Praia do Jabaquara à 15min à pied de Paraty.<br/>



        </Para>
        <Titre id="tsp" href="#tsp">
          Transports
        </Titre>
        <Para>
          
        Paraty est dotée d'une gare routière où vous trouverez des bus long trajet ainsi que des collectivos (bus local).

 

        </Para>
        <Titre id="gal" href="#gal">
          Galerie
        </Titre>
        <swiper-container class='swipe' navigation="true" pagination="true">

        <swiper-slide class='swipeImg'><img src={b} alt='ville' /></swiper-slide>
        <swiper-slide class='swipeImg'><img src={c} alt='c'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={d} alt='d'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={e} alt='e'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={f} alt='f'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={g} alt='g'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={h} alt='h'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={i} alt='i'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={j} alt='j'/></swiper-slide>

        </swiper-container>
        <Text>
         
        </Text>
      </Contain>
    </Container>
  )
}
export default Paraty
