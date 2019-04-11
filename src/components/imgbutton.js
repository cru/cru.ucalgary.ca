import React, { Component } from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ImgButton extends Component {
  render() {
    const { logo, to, href, icon } = this.props

    const content = () => {
      return (
        <>
          <LogoImg src={logo} />
          <FontAwesomeIcon className="icon" icon={icon} />
        </>
      )
    }

    const links = () => {
      if (to) {
        return <Link to={to}>{content()}</Link>
      } else if (href) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {content()}
          </a>
        )
      }
    }

    return <Container>{links()}</Container>
  }
}

export default ImgButton

const Container = Styled.div`
    display:flex;
    padding:8px;
    padding-bottom:3px;
    transition: all ${props => props.theme.boxShadowTrans};
    border-radius: ${props => props.theme.borderRadius};

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    :hover {
      box-shadow: ${props => props.theme.boxShadow};
    }
    :active {
      box-shadow: none;

    }
    .icon{
      margin-bottom:7px;
      padding:2px;
      margin-left:3px;
      font-size:13px;
      color: ${props => props.theme.imgButtonIcon};
    }
`

const LogoImg = Styled.img`
    height: 25px;
`
