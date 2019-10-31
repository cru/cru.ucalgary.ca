import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ServiceContainer from './serviceContainer'
import IpadHealthIcon from '../images/icons/icon-ipad-health.svg'
import CodeIcon from '../images/icons/icon-code.svg'
import BarChartIcon from '../images/icons/icon-bar-chart.svg'

const ServiceList = ({ style }) => {
  return (
    <div style={style}>
      <Header>
        <h4>We can assist you with</h4>
      </Header>
      <Container>
        <Item>
          <ServiceContainer
            title="Custom Software"
            description="The CRU houses project management and software development staff to support the custom development of software to support the delivery and execution of novel research workflows."
            image={CodeIcon}
          />
        </Item>
        <Item>
          <ServiceContainer
            title="Electronic Data Capture"
            description="Consequat id aliqua duis pariatur voluptate minim velit Lorem sit. Dolore minim laborum cillum ipsum qui sunt esse aliqua aute sunt. "
            image={IpadHealthIcon}
          />
        </Item>
        <Item>
          <ServiceContainer
            title="Methods and Analytics"
            description="The CRU supports project management and analysis needs of the University of Calgary Biostatistics Centre and the Alberta SPOR support Unit."
            image={BarChartIcon}
          />
        </Item>
      </Container>
    </div>
  )
}

ServiceList.propTypes = {
  style: PropTypes.node.isRequired,
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
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      padding-left: ${props => props.theme.pageMobilePadding};
      padding-right: ${props => props.theme.pageMobilePadding};
      }

`
const Item = Styled.div`
    padding-top:40px;
    :first-child{
      padding-right:100px;
      @media only screen and (max-width: ${props =>
        props.theme.tabletBreakPoint}){
        padding-right:0px;
      }
    }
    :nth-child(2n){
      padding-right:100px;
      @media only screen and (max-width: ${props =>
        props.theme.tabletBreakPoint}){
        padding-right:0px;
      }

    }

    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
        margin: 0 auto;
      }



`
