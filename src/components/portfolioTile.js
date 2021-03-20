import React from "react"
import tileStyles from "./portfolioTile.module.css"
import { Link } from "gatsby";

export default function PortfolioTile(props) {
  return (
    <div className={tileStyles.tile}>
      <Link to={props.slug}>
        <div>
          <img className={tileStyles.image} src={props.image} alt={props.alt}></img>
          <div className={tileStyles.tileName}>{props.name}</div>
        </div>
      </Link>
    </div>
  );
}