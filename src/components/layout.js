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
      {children}
      <div className="footer">
        <a href="https://www.linkedin.com/in/oliviavoler/" _target="blank" className="footerLink"><FaLinkedin/></a>
        <a href="https://github.com/ofvoler" _target="blank" className="footerLink"><FaGithub/></a>
        <a href="mailto:ofvoler@gmail.com" _target="blank" className="footerLink"><FaEnvelope/></a>
        <Link to={'/blog/'} className="footerLink"> <FaPenSquare/> </Link>
        <p className="copyright">© 2021 Olivia Voler</p>
        <div className="madeIn">Made with <span className="heart">❤️</span> in Gatsby</div>
      </div>
      
    </div>
  )
}