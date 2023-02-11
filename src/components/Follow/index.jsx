import styled from 'styled-components'
import insta from '../../assets/insta.webp'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Contain = styled.div`
  display: flex;
`

const Insta = styled.img`
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  width: 60px;
  height: 60px;
  margin-bottom: 40px;
`

function Follow() {
  const instag = () => {
    window.open('https://www.instagram.com/w.t.am/?hl=fr')
  }
  return (
    <Container>
      <Contain>
        <Insta src={insta} alt="instagram" onClick={instag} />
      </Contain>
    </Container>
  )
}
export default Follow
