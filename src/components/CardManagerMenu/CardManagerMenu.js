import React, { Fragment, useState } from "react";
import "./styles.css";
import profilePicture from "../../assets/download.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import api from "../../services/api";

export default function CardManagerMenu(props) {
  const [toggleId, setToggleId] = useState("Todos");

  const toggled = {
    color: "rgb(235, 0, 125)",
    borderBottom: "3px solid rgb(235, 0, 125)",
    borderTop: "3px solid transparent",
  };

  // const buttons = ["Pendentes", "Ativos", "Expirados", "Todos"];

  const buttons = [
    { text: "Pendentes", filter: "Pending" },
    { text: "Ativos", filter: "Active" },
    { text: "Expirados", filter: "Expired" },
    { text: "Todos", filter: "*" },
  ];

  function toggleButton(text, filter) {
    setToggleId(text);

    props.toggleCallback(filter);
  }

  return (
    <Fragment>
      <div className="menu">
        {buttons.map((button) => {
          return (
            <button
              onClick={(e) => toggleButton(button.text, button.filter)}
              style={toggleId === button.text ? toggled : {}}
              className="item dark-gray"
            >
              <h5>{button.text}</h5>
            </button>
          );
        })}
      </div>
    </Fragment>
  );
}
