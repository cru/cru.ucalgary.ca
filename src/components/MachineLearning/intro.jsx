import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'

const Intro = () => {
  return (
    <Fragment>
      <Content>
        <p>
          Machine learning is making healthcare smarter, but old-school statistics still has its place in healthcare analytics. There are different criteria for choosing between machine learning or statistical analytics, such as the analytics goal, the size of data, the number of variables, etc.
        </p>
        <p>
          Machine learning and statistical learning are nearly related in many aspects and are more or less the same, but they consider different perspectives on the same problem:
          Statistics: Statistics is defined as the study of collection, analysis, interpretation, presentation, and organization of data.
          <br />
          Machine Learning: Machine learning gives computers the ability to learn without being explicitly programmed.
        </p>
        <p>
          The following is a comparison of these two techniques based on the purpose of data analysis.
        </p>
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
        <p>
          Statistical models are often easier to interpret, and they are suitable for the description of the biological relationships when the features have mainly an additive effect. Machine learning is suitable for prediction and decision making about new data. ML is promising in the areas that are not traditional “tabular data”, such as images.
        </p>
        <div>
          <h5 className='text-muted'>Formulation</h5>
          <p>
            The formulation of machine learning and statistical modeling is different even with the same end goal.
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
        <div>
          <h5 className='text-muted'>Language</h5>
          <p>
            A major difference between statistics and machine learning is their languages. Some terms can have similar meaning in statistics and machine learning but with different languages:
        </p>
          <Table>
            <tr>
              <th>Machine Learning</th>
              <th>Statistics</th>
            </tr>
            <tr>
              <td>Sample/ instance</td>
              <td>Subject/ observation</td>
            </tr>
            <tr>
              <td>Target</td>
              <td>Outcome Variable</td>
            </tr>
            <tr>
              <td>Learning</td>
              <td>Estimation</td>
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
              <td>Softmax</td>
              <td>Multinomial Regression</td>
            </tr>
            <tr>
              <td>Supervised Learning</td>
              <td>Classification</td>
            </tr>
            <tr>
              <td>Feature</td>
              <td>Covariates</td>
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
            <tr>
              <td>Loss</td>
              <td>Log-liklihood</td>
            </tr>
            <tr>
              <td>Noise</td>
              <td>Measurement error</td>
            </tr>
            <tr>
              <td>One-hot encoding</td>
              <td>Dummy coding</td>
            </tr>
            <tr>
              <td>Precision</td>
              <td>Positive predictive value</td>
            </tr>
            <tr>
              <td>Confusion Matrix</td>
              <td>Contingency table</td>
            </tr>
            <tr>
              <td>Groundtruth</td>
              <td>Gold standard</td>
            </tr>
          </Table>
        </div>
        <div>
          <h5 className='text-muted'>Big vs. Small Data</h5>
          <p>
            For better performance, machine learning models need more data than statistical models. Powerful predictive models, such as neural networks and random forests, usually use datasets in the scales of thousands and millions for suitable performance. In contrast, statistical models often can infer and make predictions on hundreds of observations
        </p>
          <h5 className='text-muted'>Many vs. Few Variables</h5>
          <p>
            Machine learning models select between variables based on their relevance to the outcome, but statistical models are generally not like ML models. In fact, when there are more predictor variables than observations (for example, when using many genes’ status as predictors), statistical models fail completely, while machine learning models proceed unphased.
        </p>
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default Intro


const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`

const Table = Styled.table`
    width: 100%;
    margin-bottom: 2rem;
`
