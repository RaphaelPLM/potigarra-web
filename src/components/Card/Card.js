import React from "react";
import "./styles.css";
import profilePicture from "../../assets/download.jpg";

export default function Card() {
  return (
    <ul className="card">
      <header className="card-header">
        <h5>Status</h5>
        <div className="card-status"></div>
      </header>
      <body className="card-body">
        <img className="card-image" src={profilePicture} />
        <div className="double-field">
          <h5 className="dark-gray">Nome</h5>
          <h5 className="blue">Raphael Paula Leite Müller</h5>
        </div>
        <div className="field">
          <h5 className="dark-gray">CPF</h5>
          <h5 className="blue">123.456.789-00</h5>
        </div>

        <div className="field">
          <h5 className="dark-gray">RG</h5>
          <h5 className="blue">1.123.123</h5>
        </div>

        <div className="field">
          <h5 className="dark-gray">Gênero</h5>
          <h5 className="blue">Masculino</h5>
        </div>

        <div className="field">
          <h5 className="dark-gray">Data de nasc.</h5>
          <h5 className="blue">25/11/1999</h5>
        </div>

        <div className="field">
          <h5 className="dark-gray">Turma</h5>
          <h5 className="blue">112</h5>
        </div>

        <div className="field">
          <h5 className="dark-gray">Dt. associação</h5>
          <h5 className="blue">01/01/2020</h5>
        </div>

        <div className="double-field">
          <h5 className="dark-gray">Telefone</h5>
          <h5 className="blue">(61) 98272-7924</h5>
        </div>
      </body>
    </ul>
  );
}
