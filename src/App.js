import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
// import WalletConnect from "./components/Modal/WalletConnect";
// import WalletView from "./components/Modal/WalletView";
import "./App.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
      {/* <WalletConnect />
      <WalletView /> */}
    </div>
  );
}

export default App;
