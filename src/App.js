import React from "react";
import { Chart } from "./components/Chart";
import { Dashboard } from "./components/Dashboard";
import { Filter } from "./components/Filter";

import { BillProvider } from "./contexts/BillContext";

import "./assets/css/app.css";

function App() {
  return (
    <BillProvider>
      <div className="App">
        <Chart />
        <Dashboard />
        <Filter />
      </div>
    </BillProvider>
  );
}

export default App;