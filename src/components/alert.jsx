import React, { Fragment } from 'react'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import { Info } from 'react-feather'

const Alert = () => {
  return (
    <Fragment>
      <AlertHeader onClick={() => navigate('/newsroom/announcements')}>
        <Fragment>
          <Info color='#8dc7fd' size={32} />
          <div style={{ textAlign: 'center' }}>
            <h5>CRU Hosts a Validated REDCap!</h5>
            <small>Click here for more info</small>
          </div>
        </Fragment>
      </AlertHeader>
    </Fragment>
  )
}

export default Alert

const AlertHeader = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0.5rem;    
    cursor: pointer;

    h5 {
      margin: 0;
      margin-left: 1rem;
    }
`
