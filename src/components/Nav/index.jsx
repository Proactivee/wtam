import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Contain = styled.div`
  background-color: ddada00;
  border-radius: 10px;
  position: absolute;
  top: 25px;
  right: 50px;
  padding: 20px;
  @media (max-width: 768px) {
    position: absolute;
    right: 0px;
    top: 72px;
  }
`

const Icon = styled.div`
  color: white;
  margin: 25px;

  & :hover {
    cursor: pointer;
  }
`
const Cink = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding-right: 15px;
  color: #ffffff;
  font-family: 'November', sans-serif;
  font-size: 20px;
  @media (max-width: 768px) {
    padding-right: 15px;
    font-size: 15px;
  }
`

function Toolsbar() {
  const [menuOpen, setMenuOpen] = useState(true)

  const ONclick = () => {
    window.location.href = '#qsn'
  }
  const RoadClick = () => {
    window.location.href = '#rdp'
  }
  const Follow = () => {
    window.location.href = '#contact'
  }

  return menuOpen ? (
    <Icon>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        onClick={() => setMenuOpen(false)}
      />
    </Icon>
  ) : (
    <Container>
      <Icon>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={() => setMenuOpen(true)}
        />
      </Icon>
      <Contain>
        <Cink onClick={ONclick}>Qui Sommes Nous</Cink>
        <Cink onClick={RoadClick}>Roadmap</Cink>
        <Cink onClick={Follow}> Suivez-Nous</Cink>
      </Contain>
    </Container>
  )
}

export default Toolsbar
