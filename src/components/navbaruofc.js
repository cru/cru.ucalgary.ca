import React from "react"
import Styled from "styled-components"
import logo from "../images/uc-horz-rgb.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLink } from "@fortawesome/free-solid-svg-icons"
library.add(faLink)

const NavBarUofC = () => (
  <Container>
    <a
      href="https://www.ucalgary.ca/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoImg src={logo} />
      <FontAwesomeIcon className="linkIcon" icon="link" />
    </a>
  </Container>
)
export default NavBarUofC

const Container = Styled.div`
    display:flex;
    padding:8px;
    padding-bottom:3px;
    transition: all ${props => props.theme.boxShadowTrans};
    border-radius: 5px;
        :hover {
          box-shadow: ${props => props.theme.boxShadow};
    }
    :active {
      box-shadow: none;

    }
    .linkIcon{
      padding:2px;
      margin-bottom:7px;
      margin-left:3px;
      font-size:13px;
      color: rgb(20, 20, 20);
    }
`

const LogoImg = Styled.img`
    height: 25px;
`
