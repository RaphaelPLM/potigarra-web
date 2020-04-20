import React from "react";
import "./styles.css";

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
          <li className="item dark-gray"><h4>Pendentes</h4></li>
          <li className="item dark-gray"><h4>Ativos</h4></li>
          <li className="item dark-gray"><h4>Expirados</h4></li>
          <li className="item dark-gray"><h4>Todos</h4></li>
        </ul>
        <div className="body">
          <h3 className="dark-gray">Cartões pendentes</h3>
          <div className="card-grid">
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
