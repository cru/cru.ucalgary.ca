import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'

const Intro = () => {
  return (
    <Fragment>
      <Content>
        <Table>
          <tr>
            <th>Machine Learning</th>
            <th>Statistical Modeling</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Emphasize prediction</li>
                <li>Emphasize results via prediction performance</li>
                <li>Concern for overfitting but not model complexity</li>
                <li>Emphasis on performance</li>
                <li>Generalizability is obtained through performance on novel datasets</li>
                <li>Usually no superpopulation model specified</li>
                <li>Concern over performance and robustness</li>
                <li>Used for problems with many variables</li>
                <li>Used when Dataset is big</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Emphasize superpopulation inference/explanation</li>
                <li>Focus on a-priori hypothesis</li>
                <li>Simpler models preferred over complex ones (parsimony), even if the more complex models perform slightly better</li>
                <li>Emphasis on parameter interpretability</li>
                <li>Statistical modeling or sampling assumptions connects data to a population of interest</li>
                <li>Concern over performance and robustness</li>
                <li>Used for problems with few variables</li>
                <li>Used when Dataset is small</li>
              </ul>
            </td>
          </tr>
        </Table>
        <div>
          <h5>Formulation</h5>
          <p>
            Even when the end goal for both machine learning and statistical modeling is same, the formulation of two are significantly different.
        </p>
          <p>
            In a statistical model, we basically try to estimate the function f in:<br />
          Dependent Variable ( Y )  = f(Independent Variable) + error function
        </p>
          <p>
            Machine Learning takes away the deterministic function “f” out of the equation. It simply becomes <br />
            {'Output(Y)  ----- >  Input (X)'}
          </p>
          <p>
            It will try to find pockets of X in n dimensions (where n is the number of attributes), where occurrence of Y is significantly different.
        </p>
        </div>
        <Table>
          <tr>
            <th>Machine Learning</th>
            <th>Statistics</th>
          </tr>
          <tr>
            <td>Learning</td>
            <td>Estimation</td>
          </tr>
          <tr>
            <td>Hypothesis</td>
            <td>Classifier</td>
          </tr>
          <tr>
            <td>Example/ instance</td>
            <td>Data point</td>
          </tr>
          <tr>
            <td>Supervised Learning</td>
            <td>Regression</td>
          </tr>
          <tr>
            <td>Supervised Learning</td>
            <td>Classification</td>
          </tr>
          <tr>
            <td>Feature</td>
            <td>Covariate</td>
          </tr>
          <tr>
            <td>Label</td>
            <td>Response</td>
          </tr>
          <tr>
            <td>Graph/ network</td>
            <td>Model</td>
          </tr>
          <tr>
            <td>Weights</td>
            <td>Parameters</td>
          </tr>
          <tr>
            <td>Generalization</td>
            <td>Test set performance</td>
          </tr>
        </Table>
        <div>
          <h5>Big vs. Small Data</h5>
          <p>
            Machine learning models need more data than statistical models to perform well. Again, caveats apply: inference from statistical models can be problematic on very small datasets (N ≲ 30), and sometimes machine learning models can make good predictions on little data. But in general, the accuracy of the most powerful predictive models, such as neural networks and random forests, continues with additional thousands or millions of observations. In contrast, statistical models often allow inference and make decent predictions on dozens or hundreds of observations and improve little with the addition of more observations.
        </p>
          <h5>Many vs. Few Variables</h5>
          <p>
            Machine learning models all have mechanisms to sort out which variables contain information relevant to the outcome and which variables would just add noise to the predictions. Statistical models generally don’t have these mechanisms built in. In the extreme, when there are more predictor variables than observations (for example, when using many genes’ status as predictors), statistical models fail completely, while machine learning models proceed unphased. In fact, the lasso is a conventional regression model with some added machinery to automatically choose which variables help make better predictions and which should be ignored. For this reason, the lasso offers a nice combination of the predictive power of machine learning with the interpretability of statistics.
        </p>
        </div>
      </Content>
      <CruFragment/>
    </Fragment>
  )
}
export default Intro


const Content = Styled.div`
    margin-left: 2rem;
    margin-bottom: 2rem;
`

const Table = Styled.table`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
