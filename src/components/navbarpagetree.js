import React, { Component } from "react"
import Styled from "styled-components"
import NavBarLinks from "./navbarlinks"
import "../styles/main.scss"

class NavBarPageTree extends Component {
  render() {
    const { text, category, subCategory } = this.props
    const routes = this.props.page

    const pages = routes.map(routes => (
      <SubCategory>
        <>- </>
        <NavBarLinks
          page={"/" + routes}
          text={routes}
          category={subCategory === routes && category}
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
}
export default NavBarPageTree

const Category = Styled.div`
  text-transform:uppercase;
  margin-bottom:-8px;
  h2 {
    font-size:15px;
  }
`

const SubCategory = Styled.div`
  padding-left:0px;
  padding-bottom:6px;
`
