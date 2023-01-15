import React from "react";
import "./App.css";
import { CloseNav } from "./components/CloseNav";
import { Home } from "./components/Home";
import { brands } from "../src/details/brands";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Home brandName={brands} />
      </div>
      <div>
        <Logo
          handleClick={(event, id) => {
            console.log("click", event, id);
          }}
        />
      </div>
    </div>
  );
}

export default App;
