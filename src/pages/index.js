import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PortfolioTile from "../components/portfolioTile"
import '../css/styles.css'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>

        <br />
        <br />

        <h1 className="homeMainTitle"> Hi, I'm Olivia </h1>
        <p className="homeSubtitle"> 
          a 
          <span style={{ fontFamily: "Montserrat SemiBold" }} > designer & developer </span> 
          located in Boston, MA
        </p>

        <h3>Portfolio</h3>

        <div className="portfolioTileFormat">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PortfolioTile
            image={node.frontmatter.image}
            name={node.frontmatter.title}
            alt={node.frontmatter.title + " project"}
            slug={node.fields.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        limit: 6
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          excerpt(pruneLength: 120)
        }
      }
    }
  }
`