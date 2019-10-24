import React from 'react'
import { Link } from 'gatsby'
import { ArrowLeft } from 'react-feather'
import { Spring } from 'react-spring/renderprops'
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
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h1>Sent!</h1>

                <Spring
                  config={{ duration: 10000 }}
                  from={{
                    transform: 'translate3d(-20px,20px,0px)',
                    opacity: 1,
                  }}
                  to={{
                    transform: 'translate3d(500px,-500px,0px)',
                    opacity: 0,
                  }}
                >
                  {props => (
                    <div style={props}>
                      <div style={{ marginTop: '29px', paddingLeft: '10px' }}>
                        <span
                          role="img"
                          aria-label="rocket"
                          style={{ fontSize: '43px' }}
                        >
                          🚀
                        </span>
                      </div>
                    </div>
                  )}
                </Spring>
              </div>

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
