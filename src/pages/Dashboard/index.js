import React, { useEffect, useState, Fragment } from "react";
import "./styles.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { IconButton } from "@material-ui/core";
import Card from "../../components/Card/Card";
import CardGrid from "../../components/CardGrid/CardGrid";
import CardManagerMenu from "../../components/CardManagerMenu/CardManagerMenu";
import api from "../../services/api";

export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const [lastFilter, setLastFilter] = useState("*");
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("@potigarra/token");

    api
      .get("/cards", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setCards(response.data);
        setFilteredCards(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("[ERROR]", err));
  }, []);

  // Everytime cards get updated, apply the last selected filter to them
  useEffect(() => {
    filterCards(lastFilter);
  }, [cards]);

  function filterCards(filter) {
    setLastFilter(filter);

    if (filter === "*") {
      setFilteredCards(cards);

      return;
    }

    setFilteredCards(cards.filter((card) => card.status === filter));
  }

  function updateCards(card) {
    const id = card.id;
    const status = card.status;
    const serial_number = card.serial_number;
    const url = card.url;

    let cardsTmp = cards.map((el) =>
      el.id === id
        ? { ...el, status: status, serial_number: serial_number, url: url }
        : el
    );

    setCards(cardsTmp);
  }

  return (
    <div className="grid-container">
      <header className="header"></header>
      <aside className="sidenav">
        <ul className="list">
          <li key="1" className="item">Item One</li>
          <li key="2"className="item">Item Two</li>
          <li key="3" className="item">Item Three</li>
          <li key="4" className="item">Item Four</li>
          <li key="5" className="item">Item Five</li>
        </ul>
      </aside>
      <main className="main">
        <CardManagerMenu toggleCallback={filterCards} className="menu" />

        <div className="body">
          <h3 className="dark-gray">Cartões pendentes</h3>

          <div className="horizontal-separator"></div>

          <div className="icon-bar">
            <IconButton size="small" aria-label="list" color="primary">
              <ViewListIcon />
            </IconButton>
            <IconButton size="small" aria-label="list" color="primary">
              <ViewModuleIcon />
            </IconButton>
          </div>
          {isLoading === true ? (
            <h1>Loading</h1>
          ) : (
            <CardGrid>
              {filteredCards.map((card) => (
                <Card updateCallback={updateCards} card={card}></Card>
              ))}
            </CardGrid>
          )}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
