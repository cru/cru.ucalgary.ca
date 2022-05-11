import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const MobileMenu = ({ navbarpage }) => {
  return (
    <MobilePage navbarpage={navbarpage}>
      <div style={{ height: '140px' }} />
      <Link to='/people'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            People
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/partners'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Partners
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/publications'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Publications
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/newsroom/announcements'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Announcements
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/resources/data-lifecycle-management'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Data Lifecycle
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/resources/machine-learning'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Machine Learning
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/resources/downloads'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Downloads
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/about-us'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            About Us
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/services-and-pricing/edc-services'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            EDC Services
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/services-and-pricing/custom-platforms'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Custom Platforms
            <ArrowRight
              style={{
                float: 'right',

                marginRight: '20px',
              }}
            />
          </h6>
        </MobileLink>
      </Link>
      <Link to='/services-and-pricing/methods-analytics-services'>
        <MobileLink>
          <h6 style={{ marginBottom: 0 }}>
            Methods/Analytics
            <ArrowRight
              style={{
                float: 'right',
                marginRight: '20px',
              }}
            />
          </h6>
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
  outline: 2px solid ${(props) => props.theme.brandPrimColor};
  margin: 28px;
  padding: 1px;
  padding-left:25px;
  color: white;
  h6{
    color: white;
  }
`

const MobilePage = Styled.div`
  margin: 0 auto;
  background-color: #212121;
  overflow: auto;
  height: ${(props) => (props.navbarpage ? '100vh' : '0px')};
  width:100vw;
  position: fixed;
  top: 0; 
  z-index:10;
  @media only screen and (min-width: ${(props) => props.theme.tabletBreakPoint}){
    display:none;
  }
`
