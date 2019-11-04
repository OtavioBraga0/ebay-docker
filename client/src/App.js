import React from "react";
import "./App.css";
import { Provider as FavoriteProvider } from "./context/FavoriteContext";
import { Provider as ItemProvider } from "./context/ItemContext";

import logo from "./assets/logo.png";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="eBay" />
      <FavoriteProvider>
        <ItemProvider>
          <div className="content">
            <Routes />
          </div>
        </ItemProvider>
      </FavoriteProvider>
    </div>
  );
}

export default App;
