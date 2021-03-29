import React from "react"
import { Link } from "gatsby"
import "./button.css"

export default function Button({ props }) {
    return (
        <Link to={props.link} className="buttonLink">
            <div className="buttonStyle">{props.buttonText}</div>
        </Link>
    )
}