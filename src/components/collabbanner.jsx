/* eslint-disable global-require */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'styled-components'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 1500,
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
            <Banner>
              <Slider {...sliderSettings}>{getCollaboratorList(data)}</Slider>
            </Banner>
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

const Banner = Styled.div`

  cursor:grab;
  padding-top:15px;
  padding-bottom:30px;
  overflow:hidden;

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
