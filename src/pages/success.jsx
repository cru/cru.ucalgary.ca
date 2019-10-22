import React from 'react'
import { Link } from 'gatsby'
import { ArrowLeft } from 'react-feather'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'

const SuccessPage = () => {
  return (
    <>
      <Layout title="Success">
        <NavBar />
        <Padding>
          <div style={{ height: '100vh' }}>
            <div
              style={{
                height: '500px',
                maxWidth: '500px',
                margin: '0 auto',
                marginTop: '20vh',
              }}
            >
              <h1>
                Sent!
                <span> </span>
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </h1>
              <p>
                Thank you for reaching out to us. We will get back to you as
                soon as possible!
              </p>
              <br />
              <Link to="/">
                <ArrowLeft style={{ height: '16px', marginBottom: '-3px' }} />
                back home
              </Link>
            </div>
          </div>
        </Padding>
      </Layout>
    </>
  )
}

export default SuccessPage
