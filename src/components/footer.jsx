import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import { ExternalLink } from 'react-feather'
import moment from 'moment'

import FooterCropBottom from '../images/svg-backgrounds/footer-crop-bottom.svg'

const Footer = () => {
  return (
    <>
      <Container>
        {/* ***************** Site Map Links  ***************** */}
        <Column>
          <Content>
            <Title>Explore</Title>
            <Link style={{ textDecoration: 'none' }} to='/people'>
              <LinkStyle>People</LinkStyle>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/partners'>
              <LinkStyle>Partners</LinkStyle>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/publications'>
              <LinkStyle>Publications</LinkStyle>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/newsroom/announcements'>
              <LinkStyle>Announcements</LinkStyle>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to='/resources/data-lifecycle-management'
            >
              <LinkStyle>Data Lifecycle Management</LinkStyle>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/resources/machine-learning'>
              <LinkStyle>Machine Learning</LinkStyle>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/resources/downloads'>
              <LinkStyle>Downloads</LinkStyle>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to='/services-and-pricing/edc-services'
            >
              <LinkStyle>Electronic Data Capture Services</LinkStyle>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to='/services-and-pricing/custom-platforms'
            >
              <LinkStyle>Custom Research Platforms</LinkStyle>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to='/services-and-pricing/methods-analytics-services'
            >
              <LinkStyle>Methods and Analytics Services</LinkStyle>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/about-us'>
              <LinkStyle>About Us</LinkStyle>
            </Link>
          </Content>
        </Column>

        {/* ***************** External Links  ***************** */}
        <Column>
          <Content>
            <Title>Discover</Title>
            <a
              href='https://careers.ucalgary.ca/jobs/search?utf8=%3F&q=cru&c_keywords=cru#results'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Careers <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://cumming.ucalgary.ca/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Cumming School of Medicine <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.ucalgary.ca/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                University of Calgary <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.albertahealthservices.ca/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Alberta Health Services <ExternalLink size={12} />
              </LinkStyle>
            </a>
          </Content>
        </Column>

        {/* ***************** Policies  ***************** */}
        <Column>
          <Content>
            <Title>Policies</Title>
            <a
              href='https://www.ucalgary.ca/legal-services/university-policies-procedures/privacy-policy'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                UofC Privacy Policy <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.ucalgary.ca/legal-services/university-policies-procedures/acceptable-use-electronic-resources-and-information-policy'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Acceptable Use of Electronic Resources and Information Policy{' '}
                <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.ucalgary.ca/legal-services/university-policies-procedures/information-asset-management-policy'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Information Asset Management Policy <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.ucalgary.ca/legal-services/university-policies-procedures/health-information-management-policy'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Health Information Management Policy <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.ucalgary.ca/legal-services/university-policies-procedures/storage-inactive-clinical-research-records-policy'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                Storage of Inactive Clinical Research Records Policy{' '}
                <ExternalLink size={12} />
              </LinkStyle>
            </a>
            <a
              href='https://www.ucalgary.ca/legal-services/access-information-privacy/operating-standards-guidelines-forms'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <LinkStyle>
                UofC Operating Standards, Guidelines & Forms <ExternalLink size={12} />
              </LinkStyle>
            </a>
          </Content>
        </Column>

        {/* ***************** Address  ***************** */}
        <Column>
          <Content>
            <Title>Contact Information</Title>
            <Address>
              Health Sciences Centre
              <br />
              3330 Hospital Drive NW
              <br />
              Calgary, AB T2N 4N1
              <br />
            </Address>
            <Address>
              Phone
              <span> </span>
              <a href='tel:14032103845'>1 403 210 3845</a>
              <br />
              Email
              <span> </span>
              <a href='mailto:cru@ucalgary.ca'>cru@ucalgary.ca</a>
            </Address>
          </Content>
        </Column>
      </Container>

      <Strip />
      <Greeting>
        <p style={{ color: 'grey', fontSize: '12px' }}>CRU © {moment().year()}</p>
      </Greeting>
    </>
  )
}
export default Footer

const Container = Styled.div`
    width:100%;
    background-color: #212121;
    display: flex;
    flex-direction:row;
    margin-bottom:-2px;
    padding-bottom:40px;


    @media only screen and (max-width: ${(props) => props.theme.mobileBreakPoint}){
        display: block;
        padding-bottom:75px;
      }
`

const Column = Styled.div`
    flex:1;
    display:flex;
    padding-top:30px;
    padding-bottom:15px;
    margin-left:-30px;
    @media only screen and (max-width: ${(props) => props.theme.mobileBreakPoint}){
    margin-left:-10px;

  }
`

const Content = Styled.div`
  display: inline-block;
  margin: 0 auto;
  font-size:15px;
  @media only screen and (max-width: ${(props) => props.theme.mobileBreakPoint}){
        margin-left:10px;
        margin-bottom:-40px;
        padding-left: ${(props) => props.theme.pageMobilePadding};
        padding-right: ${(props) => props.theme.pageMobilePadding};
  }
`
const Strip = Styled.div`
  background-image:url(${FooterCropBottom});
  background-position: top;
  background-repeat: repeat-x;
  background-size: 410px;

  height:30px;
`

const LinkStyle = Styled.p`
  color: ${(props) => props.theme.fontSecColor};
  text-decoration:none;
  cursor:pointer;
  :hover {
    color: ${(props) => props.theme.brandPrimColor};
  }

  .contactStyleIcon{
    color:grey;
    font-size:7px;
  }
`

const Title = Styled.p`
  font-family: futura-pt, sans-serif;
  color:grey;
  font-weight:500;
  font-size:17px;
  cursor:default;
`

const Address = Styled.p`
    font-size:14px;
    font-weight:400;
    color:grey;
    line-height:22px;
    text-decoration:none;
    a{
      color: ${(props) => props.theme.fontSecColor};
      :hover{
        color: ${(props) => props.theme.brandPrimColor};
      }
    }
`

const Greeting = Styled.div`
text-align:center;
    p{
      font-family: futura-pt, sans-serif;
      font-size:16px;
    }
`
