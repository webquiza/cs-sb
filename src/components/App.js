import React from "react";
import Stopwatch from "./Stopwatch";
import Aunthentication from "./Authentication";
import Todolist from "./Todolist";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Stopwatch />
      <Aunthentication />
      <Todolist />
    </React.Fragment>
  );
}

export default App;
