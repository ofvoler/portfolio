import React from "react"
import { graphql } from "gatsby";
import { css } from "@emotion/react"
import Layout from "../components/layout"
import '../css/blog-styles.module.css'

export default function BlogPost({ data }) {
    const post = data.markdownRemark
  return (
    <Layout>
      <div 
        css={css`
          margin-top: 50px;
          margin-bottom: 100px;
        `}
      >
          <h2>{post.frontmatter.title}</h2>
          <h5 style={{ marginBottom: "50px" }}>{post.frontmatter.year}</h5>
          <div dangerouslySetInnerHTML={{ __html: post.html}} />
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
                year
            }
        }
    }
`