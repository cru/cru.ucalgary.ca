import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import RibbonContainer from './ribbonContainer'

const ServiceList = ({ style }) => {
  return (
    <div style={style}>
      <Header>
        <h4>Our Services</h4>
      </Header>
      <Container>
        <RibbonContainer
          title="Custom Software"
          description="The CRU houses project management and software development staff to support the custom development of software to support the delivery and execution of novel research workflows."
          icon="code"
        />
        <RibbonContainer
          title="Electronic Data Capture"
          description="Consequat id aliqua duis pariatur voluptate minim velit Lorem sit. Dolore minim laborum cillum ipsum qui sunt esse aliqua aute sunt. "
          icon="laptop"
        />
        <RibbonContainer
          title="Methods and Analytics"
          description="The CRU supports project management and analysis needs of the University of Calgary Biostatistics Centre and the Alberta SPOR support Unit."
          icon="chart-bar"
        />
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
`
