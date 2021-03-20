import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import PortfolioTile from "../components/portfolioTile"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>

        <br />
        <br />

        <h1
          css={css`
            display: inline-block;
            margin-top: 60px;
            margin-bottom: 20px;
            font-size: 80px;
            color: #8bbde6;
          `}
        >
          Hi, I'm Olivia.
        </h1>
        <h3
          css={css`
            font-size: 20px;
            margin-bottom: 80px;
          `}
        >designer & developer  </h3>

        <h3>Portfolio</h3>

        <div
          css={css `
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
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