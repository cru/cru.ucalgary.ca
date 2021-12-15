import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const Padding = ({ children }) => {
  return <Container>{children}</Container>
}

Padding.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Padding

const Container = Styled.div`
    padding-left: ${(props) => props.theme.pageDesktopPadding};
    padding-right: ${(props) => props.theme.pageDesktopPadding};

    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
      padding-left: ${(props) => props.theme.pageMobilePadding};
      padding-right: ${(props) => props.theme.pageMobilePadding};
    }
`
