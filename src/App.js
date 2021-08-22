import React from "react";

// components
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";

// css
import "./css/app.css";

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center mx-5 min-vh-100">
      <Header />
      <div className="mx-3 w-25">
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
