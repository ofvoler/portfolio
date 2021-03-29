import React from "react"
import { graphql } from "gatsby";
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Button from "../components/button"
import '../css/blog-styles.css'

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    // Calculate the blog number - this only works if there are < 100 blogs
    const slug = post.fields.slug
    const blogNum = (slug.length === 15 ? slug.substr(slug.length-3, 2) : slug.substr(slug.length-2, 1))
  return (
    <Layout>
      <div 
        css={css`
          margin-top: 50px;
          margin-bottom: 100px;
        `}
      >
          <h2>{post.frontmatter.title}</h2>
          <h5 style={{ marginBottom: "50px" }}>{post.frontmatter.date} • Blog {blogNum}</h5>
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
          <Button buttonLink="/blog" buttonText="Back to blog home"/>
      </div>
    </Layout>
  )
}

export const query = graphql `
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MM/DD/YYYY")
            }
            fields {
              slug
            }
        }
    }
`