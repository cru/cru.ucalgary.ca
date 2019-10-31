/* eslint-disable global-require */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'styled-components'
import Slider from 'react-slick'
import RipRight from '../images/svg-backgrounds/collab-crop-rightside.svg'
import RipLeft from '../images/svg-backgrounds/collab-crop-leftside.svg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 3000,
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

const getCollaboratorList = data => {
  const collaboratorsArray = []

  data.allCollaboratorsJson.edges.forEach((item, index) =>
    collaboratorsArray.push(
      <ImgContainer
        key={index && item.node.name}
        href={item.node.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          // eslint-disable-next-line import/no-dynamic-require
          src={require(`../images/collaborators/${item.node.fileName}`)}
          alt={item.node.name}
        />
      </ImgContainer>
    )
  )

  return collaboratorsArray
}

const CollabBanner = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query collaboratorsQuery {
            allCollaboratorsJson {
              edges {
                node {
                  name
                  fileName
                  url
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Header>
              <h4>Collaborators</h4>
            </Header>
            <div style={{ height: 0 }} />
            <Row>
              <RipContainerLeft />
              <Banner>
                <Slider {...sliderSettings}>{getCollaboratorList(data)}</Slider>
              </Banner>
              <RipContainerRight />
            </Row>
          </>
        )}
      />
    </>
  )
}

CollabBanner.propTypes = {}

export default CollabBanner

const Header = Styled.div`
  align-content:center;
  text-align: center;
`
const RipContainerLeft = Styled.div`
  background-image:url(${RipLeft});
  background-repeat: no-repeat;
  margin-right:-22px;
  height:100px;
  width:90px;
  z-index:1;
  @media only screen and (max-width: ${props => props.theme.desktopBreakPoint}){
      display:none;
    }
`

const RipContainerRight = Styled.div`
  background-image:url(${RipRight});
  background-repeat: no-repeat;
  margin-left:-17px;
  height:100px;
  width:90px;
  z-index:1;
  @media only screen and (max-width: ${props => props.theme.desktopBreakPoint}){
      display:none;
  }
`

const Row = Styled.div`
  display: flex;
  flex-direction:row;
`

const Banner = Styled.div`
  cursor:grab;
  padding-top:15px;
  padding-bottom:10px;
  overflow:hidden;
  background-color:white;

  -webkit-user-select:  none;
  -moz-user-select:  none;
  -ms-user-select:  none;
  user-select: none;
`

const ImgContainer = Styled.a`
  cursor:grab;
  margin:5px;
  margin-left:2vw;
  padding:15px;
  height:35px !important;
  width:140px !important;
  transition: all ${props => props.theme.boxShadowTrans};
  border-radius: ${props => props.theme.borderRadius};

  :hover{
    box-shadow: ${props => props.theme.boxShadow};
    cursor:pointer;
    outline: none !important;
    background-color:white;
  }

  :active{
    box-shadow:none;
  }
  :focus{
    outline:none !important;
  }

  img{
    height:35px;
    margin: 0 auto;
  }

`
