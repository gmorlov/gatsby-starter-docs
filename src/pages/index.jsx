import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width="150px" alt="" />
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <font color="green"><H1>Welcome to the Green Book,a comprehensive guide to key processes and principles for our Operating Companies.</H1></font>
            
              <p>
              This site is designed to empower you by clearly laying out the principles, practices and expectations that underpin our ways of working. You, our Operating Company leaders, need clarity, so you can go faster and make big decisions with absolute certainty about when DMGT&rsquo;s involvement is needed, and when it is not.
              <br/>
              The working relationship between DMGT and its Operating Companies is, more than ever, critical to our success.
              <br/>
              That relationship has evolved to meet the growing demands of the markets we operate in, and now is the right time to strengthen that relationship by setting out clear, mutual expectations of how we will work together.
              <br/>
              By developing this understanding, we can progress more quickly, confidently and effectively towards our shared goals, deliver our Group-wide Performance Improvement Programme and position our businesses for sustainable, profitable growth.
              <br/>
              Each business within our portfolio of number one brands has tremendous potential and opportunity ahead. DMGT is here to empower you, to support and encourage our shared values of entrepreneurialism, purpose and excellence, and to enable your success.
            </p>
 
            
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`
