import React from "react"
import styled from "styled-components"

/*import { Link } from "gatsby"*/

import NavBar from "../components/navbar"
import "../styles/main.scss"

const IndexPage = () => (
  <div>
    <NavBar />
    <p>
      Nostrud ut tempor commodo quis Lorem in in in proident enim mollit nulla
      esse. Qui in elit consectetur nulla esse minim ad laborum sit consequat
      cillum. Cupidatat cillum ea eiusmod fugiat. Cillum nulla fugiat cillum
      laboris id excepteur. Fugiat cillum occaecat aute commodo voluptate ex
      ipsum non nisi dolore non. Excepteur incididunt excepteur ipsum fugiat do
      aute sit culpa dolore officia in est consectetur irure.
    </p>
    <Test />
  </div>
)

const Test = styled.div`
  height: 150vh;
`

export default IndexPage
