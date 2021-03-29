import React from "react"
import Layout from "../components/layout";
import Button from "../components/button"
import "../css/styles.css"
import "../css/blog-styles.css"

export default function FourOhFour() {
    return (
        <Layout>
            <div className="fourOhFourWrap">
                <div className="fourOhFourContent">
                    <div className="fourOhFourTitle">oops.</div>
                    <h6>That page doesn't exist.</h6>
                    <p>
                        Either you typed in some weird URL or I made a mistake. 
                        <br />
                        If there's a broken link, please
                        {' '}
                        <a href="mailto:ofvoler@gmail.com?subject=Broken link">let me know!</a>
                    </p>

                    <Button buttonLink="/" buttonText="Back to home"/>
                </div>
            </div>
        </Layout>
    )
}