import React, { Component } from "react"
import Styled from "styled-components"

class Footer extends Component {
  render() {
    return (
      <Container>
        {/* Site Map Links  */}
        <Column>
          <a href="/">link to site</a>
        </Column>
        {/* Relevant Links  */}
        <Column>
          <a href="/">link to site</a>
        </Column>
        {/* Jobs and Social Media  */}
        <Column>
          <a href="/">link to site</a>
        </Column>
        {/* Physical Location/address of CRU */}
        <Column>
          <a href="/">link to site</a>
          <a href="/">link to site</a>
        </Column>
      </Container>
    )
  }
}
export default Footer

const Container = Styled.div`
    width:100%;
    background-color: black;
    display: flex;
    flex-direction:row;
`

const Column = Styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    /* outline:2px solid black; */
    padding:10px;
    padding-top:20px;
    padding-bottom:20px;
    
    a{
        margin:0 auto;
        padding:3px;

        color: white;
        text-decoration:underline;
        cursor:pointer;
    }
`

// Site Map
// Relevat Links
// View Jobs
// Address
// Social Media
