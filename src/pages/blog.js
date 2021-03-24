import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Blog({ data }) {
    console.log(data)
    return (
        <Layout>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <div>
                    <div>{node.frontmatter.title}</div>
                    <div>
                        <span>{node.frontmatter.date}</span>
                        <span>{node.excerpt}</span>
                    </div>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
                filter: { frontmatter: {tags: {eq: "blog"} } }
            ) {
            edges {
                node {
                    excerpt (truncate: false, pruneLength: 80)
                    frontmatter {
                        title
                        date(formatString: "MM/DD/YYYY")
                    }
                }
            }
        }
    }
`