import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import SEO from '../components/seo'
import MaxWidth from './maxwidth'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import '../helpers/fontawesomeimports'
import '../styles/main.scss'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const Layout = ({ page, group, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MaxWidth>
        <SEO title={page} />
        <NavBar page={page} group={group} />
        {children}
        <Footer />
      </MaxWidth>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  page: PropTypes.node.isRequired,
  group: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
