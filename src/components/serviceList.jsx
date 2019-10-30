import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import ServiceContainer from './serviceContainer'
import HealtherBinder from '../images/icons/healthBinder.svg'
import Code from '../images/icons/code.svg'
import Methods from '../images/icons/methods.svg'

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
            image={Code}
          />
        </Item>
        <Item>
          <ServiceContainer
            title="Electronic Data Capture"
            description="Consequat id aliqua duis pariatur voluptate minim velit Lorem sit. Dolore minim laborum cillum ipsum qui sunt esse aliqua aute sunt. "
            image={HealtherBinder}
          />
        </Item>
        <Item>
          <ServiceContainer
            title="Methods and Analytics"
            description="The CRU supports project management and analysis needs of the University of Calgary Biostatistics Centre and the Alberta SPOR support Unit."
            image={Methods}
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

`

const Item = Styled.div`
    margin:20px;
`
