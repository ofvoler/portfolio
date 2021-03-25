const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages'})
        createNodeField ({
            node,
            name: 'slug',
            value: slug,
        })
    }
  }

  exports.createPages = async ({ graphql, actions }) => {
      const { createPage } = actions
      const blogPostTemplate = path.resolve(`./src/templates/blog-page.js`)
      const portfolioPageTemplate = path.resolve(`./src/templates/portfolio-page.js`)

      const result = await graphql (`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                          slug
                        }
                        frontmatter {
                          tags
                        }
                    }
                }
            }
        }
      `)
      
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if ((node.frontmatter.tags === "-blog")) {
          createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        } else {
          createPage({
            path: node.fields.slug,
            component: portfolioPageTemplate,
            context: {
              slug: node.fields.slug,
            },
          })
        }
      })
  }