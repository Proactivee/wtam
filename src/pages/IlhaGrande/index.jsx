import styled from 'styled-components'
import { Link } from 'react-router-dom'
import a from '../../assets/Bresil/ilha/a.jpg'
import c from '../../assets/Bresil/ilha/c.jpg'
import d from '../../assets/Bresil/ilha/d.jpg'
import e from '../../assets/Bresil/ilha/e.jpg'
import f from '../../assets/Bresil/ilha/f.jpg'
import g from '../../assets/Bresil/ilha/g.jpg'
import h from '../../assets/Bresil/ilha/h.jpg'
import i from '../../assets/Bresil/ilha/i.jpg'
import j from '../../assets/Bresil/ilha/j.jpg'
import k from '../../assets/Bresil/ilha/k.jpg'

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


function Ilha() {

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
        <Intro>Ilha Grande est une île située dans l'état de Rio De Janeiro. L'île fait partie du patrimoine mondial de l'UNESCO assurant
la protection de la faune et de la flore.<br/>
On y trouve un relief montagneux recouvert par la végétation avec une altitude maximum de 1000 mètres laissant place à une vue panoramique 
sur la côte brésilienne. <br/>
Abraao est la ville principale d'Ilha Grande, elle est le point d'accès pour arriver sur l'île. <br/>
Ilha Grande possède plusieurs facettes, elle conviendra autant aux fêtards qu'aux amoureux de la nature. Le tourisme y est 
développé, mais l'île reste à taille humaine. L'électricité est souvent coupée due aux arbres qui s'abattent sur les lignes,
plongeant dans le noir l'entièreté de l'île parfois durant plusieurs jours (voire semaines).
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

        Sur cette île, nous souhaitions une nouvelle expérience, nous avons donc décidé de vivre en immersion dans la jungle. Nous avons logé en amont de la petite ville d'Abraao, 
à 20 minutes à pied.<br/>

Budget Auberge : 30€/nuit<br/>

        
      

        <strong>Rainforest House</strong>: Immersion totale, les bruits d'animaux sont multiples et la vue sur l'océan est captivante.
Le bâti est construit sur les ruines d'une exploitation de café.<br/>
Pas de connexion Wi-Fi.<br/>
Humidité Importante.
      
        </Para>
       
        <Titre id="rst" href="#rst">
          Restaurants
        </Titre>
        <Para>

        Nous avons mangé principalement à l'auberge les soirs, tandis que les midis, nous avons mangé des sandwiches car nous avons fait beaucoup de randonnées.
 
        <h3>Nos coups de coeur :</h3>


<strong>Atelie Cafeteria</strong>,  prix petit à moyen, cuisine brésilienne, en bord de plage. <br/>
<strong>Cafe Do Mar</strong>, prix moyen, cuisine brésilienne, BBQ de poisson, les pieds dans le sable.


           </Para>
           
           
        <Titre id="act" href="#act">
          Activités
        </Titre>
        <Para>

        Un panel d'activité est proposé par les différentes agences et locaux sur l'île. Entre visite de grotte, cascade et découverte des plages, pas le temps de s'ennuyer !
Durant ces quatre jours sur l'île, nous avons choisi de faire :<br/>
        
Randonnée jusqu'à la plage de Lopez Mendez à travers la jungle (6h aller-retour, 600m de dénivelé) <br/>

Balade jusqu'à la plage de sable de noir (Praia Preta)<br/>

Randonnée jusqu'à la cascade Cachoeira da Feiticeira (3h aller-retour, 200m de dénivelé)<br/>

Excursion avec un guide (visite des plages du nord de l'île, balade dans la jungle, snorkling, nager avec les tortues)



        </Para>
        <Titre id="tsp" href="#tsp">
          Transports
        </Titre>
        <Para>
          
        Arrivée/Départ : <br/>
Deux villes proposent le Départ/Retour sur l'île, Angra Dos Reis et Mangaratiba.<br/>

Il existe trois moyens pour se rendre sur l'île :<br/>
Ferry : Transport Local, AR 1 fois/jour, petit prix. (Celui que nous avons choisi). <br/>

Speed-Boat : Départ toutes les 30 minutes, prix moyen.<br/>

Taxi-Boat : Départ à la demande, prix chic.<br/>

        </Para>
        <Titre id="gal" href="#gal">
          Galerie
        </Titre>
        <swiper-container class='swipe' navigation="true" pagination="true">

        
        <swiper-slide class='swipeImg'><img src={c} alt='c'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={d} alt='d'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={e} alt='e'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={f} alt='f'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={g} alt='g'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={h} alt='h'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={i} alt='i'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={j} alt='j'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={k} alt='j'/></swiper-slide>

        </swiper-container>
        <Text>
         
        </Text>
      </Contain>
    </Container>
  )
}
export default Ilha
