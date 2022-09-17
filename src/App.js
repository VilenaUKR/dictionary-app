import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary app</header>
        <main className="App-main">
          <Dictionary defaultKeyword="victory" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            className="Portfolio-site-link"
            href="https://vilena-martirosova.netlify.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vilena Martirosova
          </a>{" "}
          and is{" "}
          <a
            className="GitHub-link"
            href="https://github.com/VilenaUKR/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
