import React, { Component } from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ImgButton extends Component {
  render() {
    const { logo, to, href, icon } = this.props

    const insideLogo = () => {
      return (
        <div>
          <LogoImg src={logo} />
          <FontAwesomeIcon className="icon" icon={icon} />
        </div>
      )
    }

    const links = () => {
      if (to) {
        return <Link to={to}>{insideLogo()}</Link>
      } else if (href) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {insideLogo()}
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
        :hover {
          box-shadow: ${props => props.theme.boxShadow};
    }
    :active {
      box-shadow: none;

    }
    .icon{
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
