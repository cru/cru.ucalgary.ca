import React, { Component } from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

class NavBarLinks extends Component {
  render() {
    const { page, selected, text } = this.props

    return (
      <Link to={page} style={{ textDecoration: "none", pointerEvents: "none" }}>
        <LinkText className={(selected && "selected") || "unSelected"}>
          {convert(text)}
        </LinkText>
      </Link>
    )
  }
}
export default NavBarLinks

const convert = x => x.replace(/_/g, " ")

const LinkText = Styled.div`
    pointer-events:all;   
    font-size: ${props => props.theme.navBarFontSize};
    font-weight: 400;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
`
