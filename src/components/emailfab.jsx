import React, { useState } from 'react'
import Styled from 'styled-components'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <FontAwesomeIcon
            style={{ display: toggle ? 'block' : 'none' }}
            icon="envelope"
          />
          <Text style={{ display: toggle ? 'block' : 'none' }}>
            <span>&nbsp;</span>
            Email CRU
          </Text>
          <EmailForm style={{ display: toggle ? 'none' : 'flex' }} />
        </FabButton>
      </ButtonContainer>

      <div id="target" />
      <PlaceHolderContainer style={{ display: toggle ? 'block' : 'none' }} />
      {toggle && (
        <ScrollButtonContainer>
          <Link to="target" smooth="true" offset={-200} duration={400}>
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
`
const ScrollButtonContainer = Styled.div`
     position:fixed;
     width:100%;
     max-width: ${props => props.theme.pageMaxWidth};
     bottom:0;
     height:auto;
`
const ScrollButton = Styled.div`
    width:150px;
    float:right;
    height:56px;
    width:130px;
    margin-right:17px;
    margin-bottom:30px;
    cursor: ${props => (props.toggle ? 'pointer' : 'default')};
    border-radius: ${props => (props.toggle ? '50px' : '0%')};
    background-color:  transparent;

    :hover {
        box-shadow:  ${props =>
          props.toggle ? props.theme.boxShadow : 'none'};
        background-color: transparent;
    } 
`

const FabButton = Styled.div`
    pointer-events: auto;
    float:right;
    font-size:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.fontPrimColor};
    transition: all 0.3s linear;      
    overflow:hidden;

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

    :hover {

        background-color: ${props =>
          props.toggle ? props.theme.brandPrimAccent : 'none'};
    }
    
    :active {
        box-shadow:none;
    }

`

const Text = Styled.p`
    font-size:18px;
    font-family: futura-pt, sans-serif;
    font-weight:500;
    color:  ${props => props.theme.fontPrimColor};
`
