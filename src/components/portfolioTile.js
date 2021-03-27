import React from "react"
import { Link } from "gatsby";
import "./portfolioTile.css"

export default function PortfolioTile(props) {
  return (
    <div className="portfolioTile">
      <Link to={props.slug}>
        <div>
          <img className="portfolioTileImage" src={props.image} alt={props.alt}></img>
          <div className="portfolioTileName">{props.name}</div>
        </div>
      </Link>
    </div>
  );
}