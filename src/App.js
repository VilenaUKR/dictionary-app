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
          <Dictionary defaultKeyword="happiness"/>
        </main>
        <footer className="App-footer">
          This project was created by Vilena Martirosova and is open-sourced on
          GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
