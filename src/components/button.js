import React from "react"
import { Link } from "gatsby"
import "./button.css"

export default function Button(props) {
    return (
        <Link to={props.buttonLink}>
            <div className="buttonLink">
                <div className="buttonStyle">{props.buttonText}</div>
            </div>
        </Link>
    )
}