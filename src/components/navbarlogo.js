import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/cru-hash.png"

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
  margin: 10px;
  margin-right: 20px;
  margin-left: 40px;
`

const LogoImg = Styled.img`
  width: 45px;
  height: 45px;
  padding:3px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 50%;
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
  }
  :active {
    box-shadow: none;

  }
`
