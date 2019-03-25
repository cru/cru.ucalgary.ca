import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/cru-hash.png"

const NavBarLogo = () => (
  <Link to="/">
    <LogoImg src={logo} />
  </Link>
)
export default NavBarLogo

const LogoImg = Styled.img`
  width: 43px;
  height: 43px;
  transition: all ${props => props.theme.boxShadowTrans};
  border-radius: 50%;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  :active {
    box-shadow: none;
  }
`
