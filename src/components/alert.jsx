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
        <AlertHeader onClick={() => navigate('/newsroom/redcap-upgrade')}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h6>Announcing Validated RC 13.7</h6>
            <small className='text-muted'>Click here for more info</small>
          </div>
        </AlertHeader>
        <AlertHeader onClick={() => navigate('/services-and-pricing/dataxplor')}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h6>
              Launching: DataXplor! Unlock the power of your REDCap data with our new data
              tools.
            </h6>
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
