import styled from 'styled-components'
import un from '../../assets/Bresil/1.jpg'
import deux from '../../assets/Bresil/2.jpg'
import trois from '../../assets/Bresil/3.jpg'
import quatre from '../../assets/Bresil/4.jpg'
import six from '../../assets/Bresil/6.jpg'
import sept from '../../assets/Bresil/7.jpg'
import huit from '../../assets/Bresil/8.jpg'
import neuf from '../../assets/Bresil/9.jpg'
import a from '../../assets/Bresil/10.jpeg'
import b from '../../assets/Bresil/11.jpeg'
import c from '../../assets/Bresil/12.jpeg'
import { Link } from 'react-router-dom'
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
/*const Titre = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 50px;
`
const Text = styled.p`
  text-align: center;
`*/



function Bresil() {
  
  return (
    <Container>
       <LinkBresil to={'/wtam/bresil'}>Brésil</LinkBresil>
      <Cities />

      <Contain>
      <swiper-container class='swipe' navigation="true" pagination="true">

<swiper-slide class='swipeImg'><img src={un} alt='ville' /></swiper-slide>
<swiper-slide class='swipeImg'><img src={deux} alt='c'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={trois} alt='d'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={quatre} alt='e'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={six} alt='f'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={sept} alt='g'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={huit} alt='h'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={neuf} alt='i'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={a} alt='j'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={b} alt='k'/></swiper-slide>
<swiper-slide class='swipeImg'><img src={c} alt='l'/></swiper-slide>


</swiper-container>
        
      </Contain>
    </Container>
  )
}
export default Bresil

//<Titre>Nos Astuces</Titre>