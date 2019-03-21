import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

const NavBarLinks = props => (
  <Link
    to={props.page}
    style={{ textDecoration: "none", pointerEvents: "none" }}
  >
    <LinkText className={(props.selected && "selected") || "unSelected"}>
      {props.text}
    </LinkText>
  </Link>
)
export default NavBarLinks

const LinkText = Styled.div`
    pointer-events:all;   
    font-size: 14.5px;
    font-weight: 400;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
`
