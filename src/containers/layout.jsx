import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import SEO from '../components/seo'
import MaxWidth from './maxwidth'
import Footer from '../components/footer'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import Alert from '../components/alert'

import 'bootstrap/dist/css/bootstrap.css';
import '../helpers/fontawesomeimports'
import '../styles/main.scss'
import '../styles/modal.css'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const Layout = ({ title, page, group, children }) => {
  return (
    <>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <MaxWidth>
          <NavBar page={page} group={group}/>
          <Alert/>
          <main>{children}</main>
          <EmailFAB />
          <footer>
            <Footer />
          </footer>
        </MaxWidth>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
