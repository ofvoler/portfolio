import React from "react"

export default function Tile( props ) {
    return (
        <div>
            <img src={props.imgSrc}></img>
            <div>{props.projectTitle}</div>
        </div>
    )
}