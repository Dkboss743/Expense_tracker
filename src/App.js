import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem> </ExpenseItem>
    </div>
  );
}

export default App;
