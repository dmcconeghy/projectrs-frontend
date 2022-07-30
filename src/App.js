import React from "react"
import { BrowserRouter } from "react-router-dom";

import Components from "./components/Components";
import NavBar from "./components/NavBar"
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar /> 
        </header>
        
        <Components />
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
