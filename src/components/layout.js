import React from "react"
import "./layout.css";
import { useStaticQuery, Link, graphql } from "gatsby"
import { FaLinkedin, FaGithub, FaEnvelope, FaPenSquare } from "react-icons/fa";

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
    <div className="page-content">
      <div className="header">
        <Link to={`/`}>
          <h3 className="headerSiteName">
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link to={`/about/`} className="headerLink rightmost"> About me </Link>
        <Link to={`/`} className="headerLink"> Portfolio </Link>
      </div>
      <div className="content">
        {children}
      </div>
      <div className="footer">
        <a href="https://www.linkedin.com/in/oliviavoler/" _target="blank" className="footerLink" aria-label="LinkedIn icon"><FaLinkedin/></a>
        <a href="https://github.com/ofvoler" _target="blank" className="footerLink" aria-label="GitHub icon"><FaGithub/></a>
        <a href="mailto:ofvoler@gmail.com" _target="blank" className="footerLink" aria-label="Email icon"><FaEnvelope/></a>
        <Link to={'/blog/'} className="footerLink" aria-label="Blog icon"><FaPenSquare/></Link>
        <p className="copyright">© {new Date().getFullYear()} Olivia Voler</p>
        <div className="madeWith">Made with <span className="heart" role="img" aria-label="heart">❤️</span> by Olivia</div>
      </div>
    </div>
  )
}