import React from 'react'

import { ThemeProvider } from 'styled-components'
import '../styles/main.scss'
import '../helpers/fontawesomeimports'

import SEO from '../components/seo'
import MaxWidth from '../containers/maxwidth'
import NavBar from '../components/navbar'
import IntroHero from '../components/introhero'
import EmailFAB from '../components/emailfab'
import Footer from '../components/footer'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const Root = () => {
  return (
    <>
      <SEO />
      <MaxWidth>
        <NavBar />
        <IntroHero />
        <div style={{ height: '50vh', backgroundColor: 'white' }} />
        <div style={{ height: '50vh', backgroundColor: 'white' }} />
        <EmailFAB />
        <Footer />
      </MaxWidth>
    </>
  )
}

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </>
)
export default IndexPage
