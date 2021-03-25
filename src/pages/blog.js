import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import '../css/blog-styles.css'

export default function Blog({ data }) {
    console.log(data)
    return (
        <Layout>
            <div className="blog-page-header">
                <h2 className="blog-page-title">Blog</h2>
                <p>
                    Welcome to my blog! 
                    As part of my senior capstone course, I'm writing blogs on 
                    everything from Scrum to software testing to ethics of AI and algorithms.
                </p>
                <p>
                    If you want to have a discussion about any of these topics, 
                    or you have some ~constructive criticism~ about my writing
                    (I <em>am</em> a CS major), feel free to shoot me 
                    <a href="mailto:ofvoler@gmail.com?subject=About your blog..." _target="blank"> an email</a>
                    !
                </p>
            </div>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <Link
                    to={node.fields.slug}
                >
                    <div className="blog-link">
                        <div className="blog-title">{node.frontmatter.title}</div>
                        <div className="blog-subtitle">
                            <span>{node.frontmatter.date} • </span>
                            <span>{node.excerpt}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
                filter: { frontmatter: {tags: {eq: "-blog"} } }
                sort: { fields: [frontmatter___date], order: DESC}
            ) {
            edges {
                node {
                    excerpt (truncate: false, pruneLength: 65)
                    frontmatter {
                        title
                        date(formatString: "MM/DD/YYYY")
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`