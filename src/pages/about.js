import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../css/styles.css"

export default function About({ data }) {
  return (
    <Layout>
      <div>
        <div className="aboutPicture">
          <img src="https://oliviavoler.com/wp-content/uploads/2020/03/guell-smaller-1536x1536.png" alt=""></img>
        </div>
        <div className="aboutText">
          <h1>Nice to meet you!</h1>
          <h6>I'm Olivia (but I think you know that by now)</h6>

          <br />
          <br />

          <h5>The technical stuff</h5>
          <p>
            I'm a computer science major, and I'm minoring in math and studio art. 
            I spent a year abroad in Denmark studying graphic design.
            Currently, I'm contributing to an open source project, where I'm working on
            front-end development and UI design!</p>

          <br />
          <br />

          <h5>The fun stuff</h5>
          <ul>
            <li>I can drink a whole water bottle in under 5 seconds</li>
            <li>I love to make Excel sheets to organize everything</li>
            <li>I can pick up the basics to any language in under a month</li>
            <li>In my free time, I like to <span style={{ color: 'black' }}>cook</span>, bike, and run</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`