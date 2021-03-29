import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const Summary = () => {
  return (
    <Fragment>
      <Content>
        <div>
          <p style={{ marginTop: 0 }}>
            In the medicine field, it is common to use statistical analytics and machine
            learning to solve problems based on a problem target and data features. This
            article looks at different concepts of machine learning and refers to
            different areas in ML. Finally, the article explains the use of machine
            learning techniques based on the research purposes in the medicine field.
          </p>
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default Summary

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
