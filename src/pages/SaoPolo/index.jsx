import styled from 'styled-components'
import { Link } from 'react-router-dom'
import a from '../../assets/Bresil/saopaulo/a.jpeg'
import b from '../../assets/Bresil/saopaulo/1.jpeg'
import c from '../../assets/Bresil/saopaulo/2.jpeg'
import d from '../../assets/Bresil/saopaulo/3.jpeg'
import e from '../../assets/Bresil/saopaulo/4.jpeg'
import f from '../../assets/Bresil/saopaulo/5.jpeg'
import g from '../../assets/Bresil/saopaulo/6.jpeg'
import h from '../../assets/Bresil/saopaulo/7.jpeg'
import i from '../../assets/Bresil/saopaulo/8.jpeg'
import j from '../../assets/Bresil/saopaulo/9.jpeg'
import k from '../../assets/Bresil/saopaulo/10.jpeg'
import l from '../../assets/Bresil/saopaulo/11.jpeg'
import m from '../../assets/Bresil/saopaulo/12.jpeg'
import n from '../../assets/Bresil/saopaulo/13.jpeg'
import o from '../../assets/Bresil/saopaulo/14.jpeg'
import ImageSlide from '../../components/Slider'
import Cities from '../../components/Cities/Bresil'
import "../../utils/style/Swipe.css"

const Container = styled.div``
const LinkBresil = styled(Link)`
  color: white;
  font-family: 'November', sans-serif;
  font-size: 80px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: none;
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
const Para = styled.p`
  margin-left: 30px;
  margin-right: 30px;
`
const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Intro = styled.p`
  padding: 15px;
`
const pictures = [a]


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
      <LinkBresil to={'/wtam/bresil'}>Br??sil</LinkBresil>
      <Cities />

      <Contain>
        <Intro>
          Sao Paulo se localise dans le Sud du pays, environ ?? une heure de
          l'oc??an Atlantique, ?? 800 m??tres d'altitude. Cette ville est peupl??e
          d'environ 11,9 millions d'habitants pour une superficie de 1521 km2.
          Cette grande ville est multiculturelle, nous retrouvons des quartiers
          d??di??s ?? chaque culture. Sao Paulo a f??t?? ses 469 ans le 25 janvier
          2023.
          <br />
          Durant ces 4 jours pass??s ?? Sao Paulo, nous avons pu faire de belle
          visite et quelques rencontres. Cette ville nous a charm?? par ses
          multiples facettes, sa convivialit?? naturelle, sa diversit?? culinaire
          et son esprit de f??te. Nous avons appr??ci?? cette premi??re immersion ????
        </Intro>
        <ImageSlide pictures={pictures} />
        <Bar>
          <Choix onClick={Hstl}>Logements </Choix>
          <Choix onClick={Rst}>Restaurants </Choix>
          <Choix onClick={Act}>Activit??s</Choix>
          <Choix onClick={Tsp}>Transports</Choix>
          <Choix onClick={Gal}>Galerie</Choix>
        </Bar>

        <Titre id="hstl" href="#hstl">
          Logements
        </Titre>
        <Para>
          Notre choix pour les h??bergements est dirig?? principalement vers des
          auberges pour leur rapport qualit??/prix. Nous passons par Booking pour
          nos r??servations.
          <br />
          Nos recherches sont cibl??es sur des chambres d'environ 30???/nuit pour
          deux. G??n??ralement ce budget nous permet d'avoir une chambre double
          avec salle de bain privative et si possible avec le petit d??jeuner.
          <br />
          Sur Sao Paulo, nous avons log?? dans deux auberges qui se trouvent
          chacune dans un des quartiers embl??matiques de la ville.
          <br />
          Notre premier auberge se situe dans le quartier Liberdade, le quartier
          Japonais de Sao Paulo.
          <br />
          <br /> <strong>Hostel Ip??</strong>: Accueil chaleureux, partie
          commune confortable et bucolique.
          <br />
          <br />
          Nous avons poursuivi notre s??jour ?? Sao Paulo dans le quartier de Vila
          Madalena.
          <br />
          <br /><strong>OBA 1</strong>: Appart/h??tel, propre, terrasse
          privative, au calme de ce quartier anim??.
          <br />
        </Para>

        <Titre id="rst" href="#rst">
          Restaurants
        </Titre>
        <Para>
          Sao Paulo offre une palette de saveurs sp??ctaculaires li??es ?? la
          diversit?? culturelle, en passant par des petites faims ?? des repas
          raffin??s.
        </Para>
        <Para>
          Nous avons donc trouv?? notre bonheur sur les ??tales du march?? :<br />
          <strong>Pastel</strong> : P??te fine en forme de demi-lune ou en
          rectangle, frite avec une garniture (sucr??e ou sal??e).
          <br /><strong>Coxinha</strong> : Boulette frite de pur??e de pommes
          de terres avec une garniture (le plus souvent au poulet).
          <br /> <strong>Pao de queijo</strong> : Pain de fromage.
          <br /> <strong>Tapioca</strong> : Galette de manioc permettant de
          faire une tortilla avec garniture (sucr??e ou sal??e).
          <br /> <strong>Hamburger</strong> : "Pain" fourr?? avec garniture au
          choix cuit au four.
          <br /> <strong>Fruits</strong> (Ananas, Fraises, Mangues,
          Past??ques...).
          <br />
          <h3>Nos coups de coeur :</h3><strong>Sushi Yassuh</strong>,
          Liberdade, prix moyen ?? chic, ambiance japonaise avec une cuisine
          ouverte sur la salle, personnel de qualit??.
          <br /><strong>BBJ Restaurante e Lanchonete</strong>, Liberdade,
          petit prix ?? moyen, cuisine br??silienne, un restaurant de quartier o??
          se retrouvent les habitants du quartier.
          <br /> <strong>Baiao Cozinha Nordestina</strong>, Vila Madalena,
          petit prix ?? moyen, cuisine du Nord du Br??sil, immersion musicale et
          dress-code traditionnel des serveurs. <br />
          <strong>Casca Gastrobar</strong>, Beco do Batman, prix moyen ?? chic,
          plats ?? partager ?? base de cuisine br??silienne avec sa caipirinha{' '}
          <br /><strong>UnderGround Coffee Bar</strong>, Vila Madalena, prix
          moyen, parfait pour bruncher avec un caf?? espresso ?? l'italienne.
          Ambiance rock, d??tente et wifi. <br />
        </Para>

        <Titre id="act" href="#act">
          Activit??s
        </Titre>
        <Para>
          <strong>Catedral Metropolitana</strong> de la place de S?? : Tr??s
          beau monument, mais la place est occup??e par des mendiants, le
          tourisme n'y est pas recommand??.
          <br /> <strong>Quartier Liberdade</strong>, quartier Japonais :
          Nombreux petits march??s et squares, authentique.
          <br /> <strong>Jardim bot??nico</strong> : Parc payant, au calme de la
          ville environnante, nous avons pass?? la matin??e ?? contempler les
          palmiers empereurs ornant les all??es, des vestiges d'anciennes
          recherches scientifiques sur la faune et la flore. Nous avons
          ??galement pu voir des singes lors de cette visite.
          <br /> <strong>Parque Ibirapuera</strong> : Tr??s grand parc
          permettant de contenter les sportifs en offrant des pistes cyclables,
          mais laisse la possibilit?? de visiter un plan??tarium, un sanctuaire
          Japonais... Nous avons aim?? nous arr??ter boire une noix de coco avec
          vue sur la ville.
          <br /> <strong>Beco do Batman</strong> : Ces ruelles color??es par les
          graffs, galerie d'art, tatoueurs, ... le temps s'arr??te pour laisser
          place ?? une atmosph??re dynamique et envo??tante.
          <br /> <strong>Quartier Jardim</strong> : Balade arbor??e et fleurie ??
          travers un quartier r??sidentiel ais??.
          <br /> <strong>Avenue Paulista</strong> : Quartier des affaires ainsi
          que de nombreuses boutiques font vibrer cette avenue.
          <br />
        </Para>
        <Titre id="tsp" href="#tsp">
          Transports
        </Titre>
        <Para>
          Bien que Sao Paulo soit une grande ville, nous nous sommes beaucoup
          d??plac??s ?? pied malgr?? le relief de la ville. Pour les visites les
          plus lointaines, nous avons exp??riment?? les trajets en bus et en
          m??tro. Uber reste un bon moyen de d??placement.
          <br /> <strong>Bus</strong> : Difficile d'avoir les horaires, mais
          passage fr??quent, ??conomique (1???/ticket), bien penser ?? demander
          l'arr??t.
          <br /> <strong>M??tro</strong> : Ramifi??, indiqu?? et s??r, le m??tro
          reste la meilleure option pour traverser la ville, prix (2???/ticket).
          <br /> <strong>D??part/Arriv??e</strong> : A Sao Paulo il y a plusieurs
          a??roports, mais il est possible d'aller au terminal pour se d??placer
          en car ?? travers tout le br??sil. <br />
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
        <swiper-slide class='swipeImg'><img src={k} alt='k'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={l} alt='l'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={m} alt='m'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={n} alt='n'/></swiper-slide>
        <swiper-slide class='swipeImg'><img src={o} alt='o'/></swiper-slide>

        </swiper-container>
        <Text></Text>
      </Contain>
    </Container>
  )
}
export default Saopolo
