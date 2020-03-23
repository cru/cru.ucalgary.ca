import React from 'react'
import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'

const NotFoundPage = () => {
  return (
    <Layout title="404 Page Not Found">
      <Padding>
        <div style={{ height: '45vh' }}>
          <div
            style={{
              height: '500px',
              maxWidth: '500px',
              margin: '0 auto',
              marginTop: '20vh',
            }}
          >
            <h1>404 Page Not Found</h1>
            <p>
              Ooops!
                <br />
              <br />
                The page you are looking for has been removed or relocated.
                <span> </span>
              <span role="img" aria-label="Sad Face">
                😢
                </span>
            </p>
          </div>
        </div>
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default NotFoundPage
