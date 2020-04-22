import React, { Fragment, useState } from "react";
import "./styles.css";
import profilePicture from "../../assets/download.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import api from "../../services/api";

export default function Card(props) {
  const [cardFront, setCardFront] = useState(true);

  const backgroundColor = setFooterColor();

  function setFooterColor() {
    if (props.card.status === "Pending") {
      return { backgroundColor: "#ff7e57" };
    } else if (props.card.status === "Active") {
      return { backgroundColor: "rgb(3, 199, 140)" };
    } else if (props.card.status === "Expired") {
      return { backgroundColor: "#ff2d5b" };
    }
  }

  function formatDate(unformattedDate) {
    const date = new Date(unformattedDate);

    return date.toLocaleDateString("en-GB");
  }

  async function activateMember() {
    let token = localStorage.getItem("@potigarra/token");

    api
      .put(
        "/cards/generate",
        { memberId: props.card.member_id },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        console.log("SUCCESS", response.data);
      })
      .catch((error) => console.log("ERROR", error));
  }

  function CardFront() {
    return (
      <Fragment>
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

        <footer style={backgroundColor} className="card-footer"></footer>
      </Fragment>
    );
  }

  function CardBack() {
    return (
      <Fragment>
        <body className="card-back-body">
          <div className="field">
            <h4 className="blue">{props.card.username}</h4>
          </div>

          <div className="field">
            <h5 className="dark-gray">Data de nascimento</h5>
            <h5 className="blue">{formatDate(props.card.birthdate)}</h5>
          </div>

          <div className="field">
            <h5 className="dark-gray">Data de registro</h5>
            <h5 className="blue">{formatDate(props.card.created_at)}</h5>
          </div>

          <div className="field">
            <h5 className="dark-gray">Gênero</h5>
            <h5 className="blue">{props.card.gender}</h5>
          </div>

          <div className="field">
            <h5 className="dark-gray">CPF</h5>
            <h5 className="blue">{props.card.cpf}</h5>
          </div>

          <div className="field">
            <h5 className="dark-gray">RG</h5>
            <h5 className="blue">{props.card.rg}</h5>
          </div>

          <div className="field">
            <h5 className="dark-gray">Celular</h5>
            <h5 className="blue">{props.card.phone_number}</h5>
          </div>

          <div className="field">
            <h5 className="dark-gray">Turma</h5>
            <h5 className="blue">{props.card.class_number}</h5>
          </div>

          {props.card.status !== "Active" ? (
            <button onClick={() => activateMember()}>Ativar</button>
          ) : (
            <Fragment></Fragment>
          )}
        </body>

        <footer style={backgroundColor} className="card-footer"></footer>
      </Fragment>
    );
  }

  function Card() {
    return (
      <div className="card">
        <IconButton
          className="icon-more"
          size="small"
          aria-label="list"
          color="primary"
          onClick={() => setCardFront(!cardFront)}
        >
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
        {cardFront === true ? CardFront() : CardBack()}
      </div>
    );
  }

  return <Fragment>{Card()}</Fragment>;
}
