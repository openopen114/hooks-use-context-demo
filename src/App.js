import React from "react";
import AppContextProvider from "./Context/ContextProvider";

import NameInput from "./components/NameInput";
import DisplayName from "./components/DisplayName";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <AppContextProvider>
        {/* Display Name */}
        <DisplayName></DisplayName>

        {/* Name Input */}
        <NameInput></NameInput>
      </AppContextProvider>
    </div>
  );
}

export default App;
