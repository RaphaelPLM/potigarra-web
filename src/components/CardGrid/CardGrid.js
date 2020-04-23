import React from "react";
import "./styles.css";

export default function CardGrid(props) {
  return <li className="card-grid">{props.children}</li>;
}
