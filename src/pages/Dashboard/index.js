import React from "react";
import "./styles.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { IconButton } from "@material-ui/core";
import Card from '../../components/Card2/Card';
import CardGrid from '../../components/CardGrid/CardGrid'

export default function Dashboard() {
  return (
    <div className="grid-container">
      <header className="header"></header>
      <aside className="sidenav">
        <ul className="list">
          <li className="item">Item One</li>
          <li className="item">Item Two</li>
          <li className="item">Item Three</li>
          <li className="item">Item Four</li>
          <li className="item">Item Five</li>
        </ul>
      </aside>
      <main className="main">
        <ul className="menu">
          <li className="item dark-gray">
            <h4>Pendentes</h4>
          </li>
          <li className="item dark-gray">
            <h4>Ativos</h4>
          </li>
          <li className="item dark-gray">
            <h4>Expirados</h4>
          </li>
          <li className="item dark-gray">
            <h4>Todos</h4>
          </li>
        </ul>
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

          <CardGrid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </CardGrid>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
