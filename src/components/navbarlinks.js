import React, { Component } from "react"
import Styled from "styled-components"
import { Link } from "gatsby"

class NavBarLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: true,
    }
  }

  render() {
    const { page, category, text, style } = this.props

    return (
      <Link to={page} style={{ textDecoration: "none", pointerEvents: "none" }}>
        <LinkText className={(category && "selected") || "unSelected"} style = {style}>
          {removeUnderscores(text)}
        </LinkText>
      </Link>
    )
  }
}
export default NavBarLinks

const removeUnderscores = x => x.replace(/_/g, " ")

const LinkText = Styled.div`
    pointer-events:all;   
    font-size: ${props => props.theme.navBarFontSize};
    font-weight: 400;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
`
