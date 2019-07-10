import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import NavBarLinks from './navbarlinks'
import '../styles/main.scss'

const NavBarPageTree = ({ text, selectedPage, page }) => {
  const pages = page.map(pageName => (
    <SubCategory key={pageName.toString()}>
      <NavBarLinks
        page={`/${pageName}`}
        text={pageName}
        style={{ fontSize: 15 }}
        group={selectedPage === pageName && selectedPage}
      />
    </SubCategory>
  ))

  return (
    <>
      <Category>
        <h2>{text}</h2>
      </Category>
      <div style={{ height: '6px' }} />
      {pages}
    </>
  )
}

NavBarPageTree.propTypes = {
  text: PropTypes.node.isRequired,
  selectedPage: PropTypes.node.isRequired,
  page: PropTypes.node.isRequired,
}

export default NavBarPageTree

const Category = Styled.div`
  text-transform:uppercase;
  width:150px;
  margin-bottom:-8px;
  h2 {
    font-size:15px;
    color:grey;
  }
`

const SubCategory = Styled.div`
  padding-left:0px;
  padding-bottom:6px;
`
