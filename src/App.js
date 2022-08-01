import React from "react"
import { BrowserRouter } from "react-router-dom";

import Components from "./components/Components";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        
        <Components />
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
