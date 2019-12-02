import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const MobileMenu = ({ navbarpage }) => {
  return (
    <MobilePage navbarpage={navbarpage}>
      <div style={{ height: '70px' }} />
      <Link to="/partners">
        <MobileLink>
          <h5 style={{ color: 'white' }}>
            Partners
            <ArrowRight
              style={{
                float: 'right',
                marginTop: '-11px',
                marginRight: '20px',
              }}
            />
          </h5>
        </MobileLink>
      </Link>
      <Link to="/publications">
        <MobileLink>
          <h5 style={{ color: 'white' }}>
            Publications
            <ArrowRight
              style={{
                float: 'right',
                marginTop: '-11px',
                marginRight: '20px',
              }}
            />
          </h5>
        </MobileLink>
      </Link>
      <Link to="/downloads">
        <MobileLink>
          <h5 style={{ color: 'white' }}>
            Downloads
            <ArrowRight
              style={{
                float: 'right',
                marginTop: '-11px',
                marginRight: '20px',
              }}
            />
          </h5>
        </MobileLink>
      </Link>
    </MobilePage>
  )
}

MobileMenu.propTypes = {
  navbarpage: PropTypes.node.isRequired,
}

export default MobileMenu

const MobileLink = Styled.div`
  outline: 2px solid ${props => props.theme.brandPrimColor};
  margin: 28px;
  padding: 1px;
  padding-left:25px;
  color: white;
  h5{
    line-height:0px;
  }
`

const MobilePage = Styled.div`
  margin: 0 auto;
  background-color: #212121;
  overflow:hidden;
  height: ${props => (props.navbarpage ? '100vh' : '0px')};
  width:100vw;
  position: fixed;
  top: 0; 
  z-index:10;
  @media only screen and (min-width: ${props => props.theme.tabletBreakPoint}){
    display:none;
  }
`
