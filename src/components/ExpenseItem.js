import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2> Tittle</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}
export default ExpenseItem;