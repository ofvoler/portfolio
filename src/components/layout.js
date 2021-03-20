import React from "react"
import "./layout.css";
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

const blue = '#8bbde6';

export default function Layout({ children }) {
    const data = useStaticQuery (
        graphql `
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1100px;
        padding: 20px;
        padding-top: 40px;
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: 20px;
            display: inline-block;
            font-style: normal;
            text-decoration: none;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          padding: 2px;
          text-decoration: none;
          color: #000000;
          
          &:hover {
            background:
              linear-gradient(
                to bottom, ${blue} 0%,
                ${blue} 100%
              );
            background-position: 0 100%;
            background-repeat: repeat-x;
            background-size: 4px 4px;
          }
        `}
      >
        About me
      </Link>
      <Link
        to={`/`}
        css={css`
          float: right;
          padding: 2px;
          margin-right: 2rem;
          text-decoration: none;
          color: #000000;
          
          &:hover {
            background:
              linear-gradient(
                to bottom, ${blue} 0%,
                ${blue} 100%
              );
            background-position: 0 100%;
            background-repeat: repeat-x;
            background-size: 4px 4px;
          }
        `}
      >
        Portfolio
      </Link>
      {children}
    </div>
  )
}