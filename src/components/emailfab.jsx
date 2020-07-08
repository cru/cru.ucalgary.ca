import React, { useState } from 'react'
import Styled from 'styled-components'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mail } from 'react-feather'
import EmailForm from './emailform'

const EmailFAB = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <div style={{ height: '200px' }} />
      <ScrollTrigger
        onEnter={() => setToggle(false)}
        onExit={() => setToggle(true)}
      >
        <div
          style={{
            backgroundColor: 'transparent',
            height: 600,
            marginBottom: '-800px',
          }}
        />
      </ScrollTrigger>

      <ButtonContainer toggle={toggle}>
        <FabButton toggle={toggle}>
          <Mail size={22} className='mr-2' style={{ display: toggle ? 'block' : 'none' }} />
          <Text style={{ display: toggle ? 'block' : 'none' }}>
            Email CRU
            </Text>
          <EmailForm style={{ display: toggle ? 'none' : 'flex' }} />
        </FabButton>
      </ButtonContainer>

      <div id="target" />
      <PlaceHolderContainer style={{ display: toggle ? 'block' : 'none' }} />
      {toggle && (
        <ScrollButtonContainer>
          <Link to="target" smooth="true" offset={-50} duration={400}>
            <ScrollButton toggle={toggle} />
          </Link>
        </ScrollButtonContainer>
      )}
    </>
  )
}

export default EmailFAB

const PlaceHolderContainer = Styled.div`
    height:800px;
    width:100%;
    background-color:transparent;
`

const ButtonContainer = Styled.div`
    pointer-events: none;
    bottom: 0;
    width:100%;
    max-width: ${props => props.theme.pageMaxWidth};
    position: ${props => (props.toggle ? 'fixed' : 'static')};
    height: ${props => (props.toggle ? 'auto' : '600px')};
    z-index:3;

`
const ScrollButtonContainer = Styled.div`
     position:fixed;
     width:100%;
     max-width: ${props => props.theme.pageMaxWidth};
     bottom:0;
     height:auto;
     z-index:4;
`
const ScrollButton = Styled.div`
    float:right;
    height:56px;
    width:130px;
    margin-right:17px;
    margin-bottom:30px;
    pointer-events: auto;
    cursor: ${props => (props.toggle ? 'pointer' : 'default')};
    border-radius: ${props => (props.toggle ? '50px' : '0%')};
    background-color:  transparent;

    :hover {
        box-shadow:  ${props =>
    props.toggle ? props.theme.boxShadow : 'none'};
        background-color: transparent;
    }
    :active {
      box-shadow: none;
    }
`

const FabButton = Styled.div`
    float:right;
    font-size:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.fontPrimColor};
    transition: all 0.3s linear;      
    overflow:hidden;
    pointer-events: auto;
    z-index:3;

    -webkit-user-select: ${props => (props.toggle ? 'none' : 'auto')};
    -moz-user-select: ${props => (props.toggle ? 'none' : 'auto')};
    -ms-user-select: ${props => (props.toggle ? 'none' : 'auto')};
    user-select: ${props => (props.toggle ? 'none' : 'auto')};

    cursor: ${props => (props.toggle ? 'pointer' : 'default')};
    margin-bottom: ${props => (props.toggle ? '30px' : '0')};
    margin-right: ${props => (props.toggle ? '17px' : '0')};
    height: ${props => (props.toggle ? '56px' : '600px')};
    width: ${props => (props.toggle ? '130px' : '100%')};
    border-radius: ${props => (props.toggle ? '50px' : '0%')};
    background-color:  ${props =>
    props.toggle ? props.theme.brandPrimColor : props.theme.brandPrimAccent};
    box-shadow:${props =>
    props.toggle ? props.theme.boxShadowAccent : 'none'};

`

const Text = Styled.span`
    font-size:18px;
    font-family: futura-pt, sans-serif;
    font-weight:500;
    color:  ${props => props.theme.fontPrimColor};
`
