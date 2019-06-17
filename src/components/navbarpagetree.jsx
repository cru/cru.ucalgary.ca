import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import NavBarLinks from './navbarlinks'
import '../styles/main.scss'

const NavBarPageTree = ({ text, category, subCategory, page }) => {
  const pages = page.map(pageName => (
    <SubCategory key={pageName.toString()}>
      <>- </>
      <NavBarLinks
        page={`/${pageName}`}
        text={pageName}
        style={{ fontSize: 17 }}
        category={subCategory === pageName && category}
      />
    </SubCategory>
  ))

  return (
    <div style={{ paddingBottom: 20, paddingTop: 10 }}>
      <Category>
        <h2>{text}</h2>
      </Category>

      {pages}
    </div>
  )
}

NavBarPageTree.propTypes = {
  text: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
  subCategory: PropTypes.node.isRequired,
  page: PropTypes.node.isRequired,
}

export default NavBarPageTree

const Category = Styled.div`
  text-transform:uppercase;
  width:150px;
  margin-bottom:-8px;
  h2 {
    font-size:17px;
  }
`

const SubCategory = Styled.div`
  padding-left:0px;
  padding-bottom:6px;
`
