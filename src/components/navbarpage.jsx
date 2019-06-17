import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const NavBarPage = ({ toggle, children }) => {
  const getToggle = () => {
    if (toggle === false) {
      return 'translate3d(-110vw, -15px, 0)'
    }
    return 'translate3d(-15px, -15px, 0)'
  }

  const css = {
    transform: getToggle(),
  }

  return (
    <Container style={css}>
      <CenterContent>{children}</CenterContent>
    </Container>
  )
}

NavBarPage.propTypes = {
  toggle: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavBarPage

const Container = Styled.div`
    position:absolute;
    background-color: ${props => props.theme.navBarPrimary};
    box-shadow: ${props => props.theme.boxShadow};
    height:100vh;
    width:100vw;
    transform: translate3d(-110vw, -10px, 0);
    transition: transform 0s linear;
    transform-style: flat;
    display: flex;
    align-items: center;
`

const CenterContent = Styled.div`
  margin: 0 auto;
  width:98px
`
