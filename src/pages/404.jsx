import React from 'react'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'

const NotFoundPage = () => {
  return (
    <>
      <Layout title="404 Page Not Found">
        <NavBar />
        <div style={{ height: '100vh' }}>
          <div
            style={{
              height: '500px',
              width: '500px',
              margin: '0 auto',
              marginTop: '20vh',
              padding: '25px',
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
      </Layout>
    </>
  )
}

export default NotFoundPage
