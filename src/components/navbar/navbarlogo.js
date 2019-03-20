import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/cru-hash.png"

const NavBarLogo = () => (
  <Container>
    <Link to="/">
      <LogoImg src={logo} />
    </Link>
  </Container>
)
export default NavBarLogo

const Container = Styled.div`
  width: 45px;
  height: 45px;
  margin: 13px;
  margin-right: 20px;
  margin-left: 50px;
`

const LogoImg = Styled.img`
  width: 45px;
  height: 45px;

  :hover {
    filter: invert(80%);
  }
`
