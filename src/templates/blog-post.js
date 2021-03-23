import React from "react"
import { graphql } from "gatsby";
import { css } from "@emotion/react"
import Layout from "../components/layout"

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
          <h1>{post.frontmatter.title}</h1>
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
            }
        }
    }
`