import React from 'react'
import Styled from 'styled-components'
import ServiceContainer from './serviceContainer'
import IpadHealthIcon from '../images/icons/Asset6.svg'
import CodeIcon from '../images/icons/Asset8.svg'
import BarChartIcon from '../images/icons/Asset7.svg'

const ServiceList = () => {
  return (
    <div>
      <Header>
        <h4>We can assist you with</h4>
      </Header>
      <Container>
        <Item>
          <ServiceContainer
            title='Electronic Data Capture'
            description='The CRU provides you with high-quality and easy-to-use capacity building tools in the areas of: data capture (REDCap), databases, and data management.'
            image={IpadHealthIcon}
          />
        </Item>
        <Item>
          <ServiceContainer
            title='Methods and Analytics'
            description='The CRU provides statistical support for clinical trials (study design, randomization, and statistical analysis) as well as observational studies (administrative data requests, cohort extractions, statistical analysis).'
            image={BarChartIcon}
          />
        </Item>
        <Item>
          <ServiceContainer
            title='Custom Software'
            description='The CRU Software Development Team helps you with creative solutions to support the setup and delivery of novel research workflows.'
            image={CodeIcon}
          />
        </Item>
      </Container>
    </div>
  )
}

export default ServiceList

const Header = Styled.div`
    align-content:center;
    text-align: center;
`
const Container = Styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
      padding-left: ${(props) => props.theme.pageMobilePadding};
      padding-right: ${(props) => props.theme.pageMobilePadding};
      }

`
const Item = Styled.div`
    padding-top:40px;
    :first-child{
      padding-right:100px;
      @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
        padding-right:0px;
      }
    }
    :nth-child(2n){
      padding-right:100px;
      @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
        padding-right:0px;
      }

    }

    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
        margin: 0 auto;
      }



`
