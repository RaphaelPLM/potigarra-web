import React from "react";
import "./styles.css";
import profilePicture from "../../assets/download.jpg";

export default function Card() {
  return (
    <div className="card">
    
        <img className="card-image" src={profilePicture} />
   
      <body className="card-body">
        <div>
          <h4 className="blue">Raphael Paula Leite Müller</h4>
        </div>

        <br/>

        <div>
          <h5 className="dark-gray">Data de registro</h5>
          <h5 className="blue">01/01/2020</h5>
        </div>
      </body>

      <footer className="card-footer">
        <h5>Status</h5>
        <div className="card-status"></div>
      </footer>
    </div>
  );
}
