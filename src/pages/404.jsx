import React from 'react'
import { Link } from 'gatsby'
import Padding from '../containers/padding'
import '../styles/main.scss'

const NotFoundPage = () => (
  <div
    style={{
      height: '500px',
      width: '500px',
      margin: '0 auto',
      marginTop: '30vh',
    }}
  >
    <Padding>
      <h2>Page Not Found</h2>
      <p>
        Ooops! The page you are looking for has been removed or relocated.
        <span role="img" aria-label="Face Screaming in Fear">
          😢
        </span>
      </p>
      <Link to="/">Back home</Link>
    </Padding>
  </div>
)

export default NotFoundPage
