import React from 'react'
import Styled from 'styled-components'
import { navigate } from 'gatsby'
import Slider from 'react-slick'
import { ChevronRight, ChevronLeft } from 'react-feather'

const Alert = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    pauseOnFocus: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRight color='black' />,
    prevArrow: <ChevronLeft color='black' />,
  }

  return (
    <AlertSlider>
      <Slider {...sliderSettings} style={{ width: '90%' }}>
        <AlertHeader onClick={() => navigate('/newsroom/seasonal-closure-2022')}>
          <div style={{ textAlign: 'center' }}>
            <h6>Seasonal Closure: December 22nd 2022 - January 1st 2022</h6>
            <small className='text-muted'>Click here for more info</small>
          </div>
        </AlertHeader>
        <AlertHeader onClick={() => navigate('/newsroom/seed-grant')}>
          <div style={{ textAlign: 'center' }}>
            <h6>
              Up to $25,000 in credits available for CRU support services through the{' '}
              <a
                className='external-link'
                href='https://cumming.ucalgary.ca/research/cccr/how-we-help/clinical-research-fund?mkt_tok=MTYxLU9MTi05OTAAAAGH8lf7VZbFO3Mk4Xm6n2TkS84nRaOdeyBUFXTKg-4PGMM2PJyrJJveAN-d-Ox4oDt7NFC9xXkdWgAg_RsIGo7K'
              >
                Clinical Research Fund SEED Grant
              </a>
              .
            </h6>
            <small className='text-muted'>Click here for more info</small>
          </div>
        </AlertHeader>
        <AlertHeader onClick={() => navigate('/newsroom/redcap-validation')}>
          <div style={{ textAlign: 'center' }}>
            <h6>CRU Hosts a Validated REDCap!</h6>
            <small className='text-muted'>Click here for more info</small>
          </div>
        </AlertHeader>
      </Slider>
    </AlertSlider>
  )
}

export default Alert

const AlertSlider = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.navBarAccent};
`

const AlertHeader = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0.5rem;    
    cursor: pointer;
    
    h6 {
      margin: 0;
      margin-left: 1rem;
    }
`
