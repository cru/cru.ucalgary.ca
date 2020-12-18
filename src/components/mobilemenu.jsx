import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const MobileMenu = ({ navbarpage }) => {
  return (
    <MobilePage navbarpage={navbarpage}>
      <div style={{ height: '140px' }} />
      <Link to="/people">
        <MobileLink>
          <h5 >
            People
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
      <Link to="/partners">
        <MobileLink>
          <h5 >
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
          <h5 >
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
      <Link to="/data-lifecycle-mangement">
        <MobileLink>
          <h5 >
            Data Lifecycle Management
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
      <Link to="/machine-learning">
        <MobileLink>
          <h5 >
            Machine Learning
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
          <h5 >
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
    color: white;
    margin-bottom: 2rem;
  }
`

const MobilePage = Styled.div`
  margin: 0 auto;
  background-color: #212121;
  overflow: hidden;
  height: ${props => (props.navbarpage ? '100vh' : '0px')};
  width:100vw;
  position: fixed;
  top: 0; 
  z-index:10;
  @media only screen and (min-width: ${props => props.theme.tabletBreakPoint}){
    display:none;
  }
`
