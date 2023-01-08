import styled from 'styled-components'
import fleche from '../../assets/fleche.png'
import insta from '../../assets/insta.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Contain = styled.div`
  display: flex;
`
const Btn = styled.button``
const Insta = styled.img`
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
`

const Fleche = styled.img`
  padding-left: 20px;
  width: 16px;
`
function Follow() {
  const Alert = () => {
    alert('🚧Site en construction🚧')
  }
  const instag = () => {
    window.open('https://www.instagram.com/w.t.am/?hl=fr')
  }
  return (
    <Container>
      <Btn onClick={Alert}>Suivez nos Aventures sur ce site !</Btn>
      <Contain>
        <Btn>
          Sur Instagram
          <Fleche src={fleche} alt="fleche" />{' '}
        </Btn>
        <Insta src={insta} alt="instagram" onClick={instag} />
      </Contain>
    </Container>
  )
}
export default Follow
