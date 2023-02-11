import styled from 'styled-components'
import { Link } from 'react-router-dom'
import a from '../../assets/Bresil/saopaulo/a.jpg'
import b from '../../assets/Bresil/saopaulo/1.JPG'
import c from '../../assets/Bresil/saopaulo/2.JPG'
import d from '../../assets/Bresil/saopaulo/3.JPG'
import e from '../../assets/Bresil/saopaulo/4.JPG'
import f from '../../assets/Bresil/saopaulo/5.JPG'
import g from '../../assets/Bresil/saopaulo/6.JPG'
import h from '../../assets/Bresil/saopaulo/7.JPG'
import i from '../../assets/Bresil/saopaulo/8.JPG'
import j from '../../assets/Bresil/saopaulo/9.JPG'
import k from '../../assets/Bresil/saopaulo/10.JPG'
import l from '../../assets/Bresil/saopaulo/11.JPG'
import m from '../../assets/Bresil/saopaulo/12.JPG'
import n from '../../assets/Bresil/saopaulo/13.JPG'
import o from '../../assets/Bresil/saopaulo/14.JPG'
import ImageSlide from '../../components/Slider'
import Cities from '../../components/Cities/Bresil'

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
const pictures1=[b,c,d,e,f,g,h,i,j,k,l,m,n,o]

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
  const Gal = () => {
    window.location = '#gal'
  }
  return (
    <Container>
      <LinkBresil to={'/wtam/bresil'}>Brésil</LinkBresil>
      <Cities />

      <Contain>
        <Intro>Sao Paulo se localise dans le Sud du pays, environ à une heure de l'océan Atlantique, à 800 mètres d'altitude. Cette ville est peuplée d'environ 11,9 millions d'habitants pour une superficie de 1521 km2. Cette grande ville est multiculturelle, nous retrouvons des quartiers dédiés à chaque culture. Sao Paulo a fêté ses 469 ans le 25 janvier 2023.<br/>
Durant ces 4 jours passés à Sao Paulo, nous avons pu faire de belle visite et quelques rencontres. Cette ville nous a charmés par ses multiples facettes, sa convivialité naturelle, sa diversité culinaires et son esprit de fête. Nous avons apprécié cette première immersion 😀

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
        Notre choix pour les hébergements est dirigé principalement vers des auberges pour leur rapport qualité/prix. Nous passons par Booking pour nos réservations.<br/>

        Nos recherches sont ciblées sur des chambres d'environ 30€/nuit pour deux. Généralement ce budget nous permet d'avoir une chambre double avec salle de bain privative
        et si possible avec le petit déjeuner.<br/>
        Sur Sao Paulo, nous avons logé dans deux auberges qui se trouvent chacune dans un des quartiers emblématique de la ville.<br/>

        Notre premier auberge se situe dans le quartier Liberdade, le quartier Japonais de Sao Paulo.<br/><br/>

        - <strong>Hostel Ipê</strong>: Accueil chaleureux, partie commune confortable et bucolique.<br/><br/>

       Nous avons poursuivi notre séjour à Sao Paulo dans le quartier de Vila Madalena.<br/><br/>

       - <strong>OBA 1</strong>: Appart/hôtel, propre, terrasse privative, au calme de ce quartier animé.<br/>

        </Para>
       
        <Titre id="rst" href="#rst">
          Restaurants
        </Titre>
        <Para>Sao Paulo offre une palette de saveurs spéctaculaires liées à la diversité culturelle, en passant par des petites faim à des repas raffinées.</Para>
        <Para>
          Nous avons donc trouvé notre bonheur sur les étales du marché :<br/>
        
          - <strong>Pastel</strong> : Pâte fine en forme de demi-lune ou en rectangle frit avec une garniture (sucrée ou salée).<br/>
          - <strong>Coxinha</strong> : Boulette frit de purée de pommes de terres avec une garniture (le plus souvent au poulet).<br/>
          - <strong>Pao de queijo</strong> : Pain de fromage.<br/>
          - <strong>Tapioca</strong> : Galette de manioc permettant de faire une tortilla avec garniture (sucrée ou salée).<br/>
          - <strong>Hamburger</strong> : "Pain" fourré avec garniture au choix cuit au four.<br/>
          -  <strong>Fruits</strong> (Ananas, Fraises, Mangues, Pastèques...).<br/>

<h3>Nos coups de coeur :</h3>

- <strong>Sushi Yassuh</strong>, Liberdade, prix moyen à chic, ambiance japonaise avec une cuisine ouverte sur la salle, personnel de qualité.<br/>

- <strong>BBJ Restaurante e Lanchonete</strong>, Liberdade, petit prix à moyen, cuisine brésilienne, un restaurant de quartier où se retrouve les habitants du quartier.<br/>

- <strong>Baiao Cozinha Nordestina</strong>, Vila Madalena, petit prix à moyen, cuisine du Nord du Brésil, immersion musicale et dress-code traditionnel des serveurs. <br/>

  - <strong>Casca Gastrobar</strong>, Beco do Batman, prix moyen à chic, plats à partager à base de cuisine brésilienne avec sa caipirinha <br/>

- <strong>UnderGround Coffee Bar</strong>, Vila Madalena, prix moyen, parfait pour bruncher avec un café espresso à l'italienne. Ambiance rock, détente et wifi. <br/>


           </Para>
           
           

      
        <Titre id="act" href="#act">
          Activités
        </Titre>
        <Para>
        - <strong>Catedral Metropolitana</strong> de la place de Sé : Très beau monument, mais la place est occupée par des mendiants, le tourisme n'y est pas recommandé.<br/>

- <strong>Quartier Liberdade</strong>, quartier Japonais : Nombreux petits marchés et squares, authentique.<br/>

- <strong>Jardim botânico</strong> : Parc payant, au calme de la ville environnante, nous avons la matinée à contempler les palmiers empereurs ornant les allées, 
des vestiges d'anciennes rechercher scientifiques sur la faune et la flore. Nous avons également pu voir des singes lors de cette visite.<br/>

- <strong>Parque Ibirapuera</strong> : Très grand parc permettant de contenter les sportifs en offrant des pistes cyclables, mais laisse la possibilité de visité un planétarium, 
un sanctuaire Japonais... Nous avons aimé nous arrêter boire une noix de coco avec vu sur la ville.<br/>

- <strong>Beco do Batman</strong> : Ces ruelles colorées par les graffs, galerie d'art, tatoueurs, ... le temps s'arrête pour laisser place à une atmosphère dynamique et envoûtante.<br/>

- <strong>Quartier Jardim</strong> : Balade arborée et fleuri à travers un quartier résidentiel aisé.<br/>

- <strong>Avenue Paulista</strong> : Quartier des affaires ainsi que de nombreuses boutiques font vibrer cette avenue.<br/>


        </Para>
        <Titre id="tsp" href="#tsp">
          Transports
        </Titre>
        <Para>
          
Bien que Sao Paulo soit une grande ville, nous nous sommes beaucoup déplacé à pied malgré le relief de la ville.
Pour les visites les plus lointaines, nous avons expérimentés les trajets en bus et en métro. Uber reste un bon moyen de déplacement.<br/>

- <strong>Bus</strong> : Difficile d'avoir les horaires, mais passage fréquent, économique (1€/ticket), bien penser à demander l'arrêt.<br/>

- <strong>Métro</strong> : Ramifié, indiqué et sûre, le métro reste la meilleure option pour traverser la ville, prix (2€/ticket).<br/>

- <strong>Départ/Arrivé</strong> : A Sao Paulo il y plusieurs aéroports, mais il est possible d'aller au terminal pour se déplacer en car à travers tout le brésil. <br/>
 
 

        </Para>
        <Titre id="gal" href="#gal">
          Galerie
        </Titre>
        <ImageSlide pictures={pictures1}/>
        <Text>
         
        </Text>
      </Contain>
    </Container>
  )
}
export default Saopolo
