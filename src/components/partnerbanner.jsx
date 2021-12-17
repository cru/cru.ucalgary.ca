import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Styled from 'styled-components'
import Slider from 'react-slick'
import { ArrowRight } from 'react-feather'
import RipRight from '../images/svg-backgrounds/collab-crop-rightside.svg'
import RipLeft from '../images/svg-backgrounds/collab-crop-leftside.svg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2500,
  pauseOnFocus: true,
  dots: false,
  infinite: true,
  slidesToShow: 4,
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

const getPartnersList = (data) => {
  const partners = []

  data.allPartnersJson.edges.forEach((item) =>
    partners.push(
      <ImgContainer key={item.node.name}>
        <img src={item.node.image.src.childImageSharp.fluid.src} alt={item.node.name} />
      </ImgContainer>
    )
  )

  return partners
}

const ParterBanner = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query partnersBannerQuery {
            allPartnersJson {
              edges {
                node {
                  image {
                    src {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Header>
              <h5>
                <span>
                  <Link to='/partners'>
                    See All Partners
                    <span> </span>
                    <ArrowRight style={{ height: 17, marginBottom: -2.4 }} />
                  </Link>
                </span>
              </h5>
            </Header>
            <Row>
              <RipContainerLeft />
              <Banner>
                <Slider {...sliderSettings}>{getPartnersList(data)}</Slider>
              </Banner>
              <RipContainerRight />
            </Row>
          </>
        )}
      />
    </>
  )
}

ParterBanner.propTypes = {}

export default ParterBanner

const Header = Styled.div`
  align-content:center;
  text-align: center;
  margin-bottom:30px;


`
const RipContainerLeft = Styled.div`
  background-image:url(${RipLeft});
  background-repeat: no-repeat;
  margin-right:-16px;
  height:100px;
  width:250px;
  z-index:1;
  @media only screen and (max-width: ${(props) => props.theme.desktopBreakPoint}){
      display:none;
    }
`

const RipContainerRight = Styled.div`
  background-image:url(${RipRight});
  background-repeat: no-repeat;
  margin-left:-16px;
  height:100px;
  width:250px;
  z-index:1;
  @media only screen and (max-width: ${(props) => props.theme.desktopBreakPoint}){
      display:none;
  }
`

const Row = Styled.div`
  display: flex;
  flex-direction:row;
`

const Banner = Styled.div`
  cursor:grab;
  overflow:hidden;
  background-color:white;
  -webkit-user-select:  none;
  -moz-user-select:  none;
  -ms-user-select:  none;
  user-select: none;
  span {
    text-decoration:none;
    color: grey;
  }
`

const ImgContainer = Styled.div`
  height: 90px;
  display:inline-block;
  outline: none;

  img{
    width:140px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;

  }
`
