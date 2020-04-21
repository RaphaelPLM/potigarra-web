import React from "react";
import "./styles.css";
import profilePicture from "../../assets/download.jpg";
import api from "../../services/api";

export default function Card(props) {
  
  function formatDate(unformattedDate) {
    const date = new Date(unformattedDate);

    return date.toLocaleDateString('en-GB');
  }
  
  return (
    <div className="card">
      <img className="card-image" src={profilePicture} />

      <body className="card-body">
        <div>
          <h4 className="blue">{props.card.username}</h4>
        </div>

        <br />

        <div>
          <h5 className="dark-gray">Data de registro</h5>
          <h5 className="blue">{formatDate(props.card.created_at)}</h5>
        </div>
      </body>

      <footer className="card-footer">
        <h5>Status</h5>
        <div className="card-status"></div>
      </footer>
    </div>
  );
}
