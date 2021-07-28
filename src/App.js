import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

import App1 from "./App1/App1";

function App() {
  return (
    <Router>
      <div className="App">
        <App1 />
      </div>
    </Router>
  );
}

export default App;
