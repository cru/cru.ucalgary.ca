import React from 'react'
import Styled from 'styled-components'
import Slider from 'react-slick'
import uofcImg from '../images/uc-horz-rgb.png'
import cruImg from '../images/cru_logo.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 2000,
  pauseOnFocus: true,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

const CollabBanner = () => {
  return (
    <>
      <Header>
        <h2>Collaborators</h2>
      </Header>
      <Banner>
        <Slider {...sliderSettings}>
          <ImgContainer>
            <img src={cruImg} alt="cru logo" />
          </ImgContainer>
          <ImgContainer>
            <a href="//ucalgary.ca" target="_blank" rel="noopener noreferrer">
              <img src={uofcImg} alt="uofcImg logo" />
            </a>
          </ImgContainer>
          <ImgContainer>
            <img src={cruImg} alt="cru logo" />
          </ImgContainer>
          <ImgContainer>
            <a href="//ucalgary.ca" target="_blank" rel="noopener noreferrer">
              <img src={uofcImg} alt="uofcImg logo" />
            </a>
          </ImgContainer>
          <ImgContainer>
            <img src={cruImg} alt="cru logo" />
          </ImgContainer>
          <ImgContainer>
            <img src={cruImg} alt="cru logo" />
          </ImgContainer>
          <ImgContainer>
            <a href="//ucalgary.ca" target="_blank" rel="noopener noreferrer">
              <img src={uofcImg} alt="uofcImg logo" />
            </a>
          </ImgContainer>
          <ImgContainer>
            <img src={cruImg} alt="cru logo" />
          </ImgContainer>
          <ImgContainer>
            <a href="//ucalgary.ca" target="_blank" rel="noopener noreferrer">
              <img src={uofcImg} alt="uofcImg logo" />
            </a>
          </ImgContainer>
          <ImgContainer>
            <img src={cruImg} alt="cru logo" />
          </ImgContainer>
        </Slider>
      </Banner>
    </>
  )
}

CollabBanner.propTypes = {}

export default CollabBanner

const Header = Styled.div`
  align-content:center;
  text-align: center;
`

const Banner = Styled.div`
  padding:30px;
  cursor:grab;
`

const ImgContainer = Styled.div`
  :focus{
    outline: none !important;
  }

  img{
    height:38px;
    margin:20px;
    padding:7px;
    padding-left:15px;
    padding-right:15px;
    border-radius: ${props => props.theme.borderRadius};

  }
  img:hover{
    cursor:pointer;
    box-shadow: ${props => props.theme.boxShadow};
  }
  img:active{
    cursor:pointer;
    box-shadow: none;
    outline: none !important;
  }
`
