import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filterYear, setfilteredYear] = useState("2020");
  const expensesFilterChange = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpeses = (selectedYear) => {
    return props.expenses.filter(
      (expense) => expense.date.getFullYear() === +selectedYear
    );
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={expensesFilterChange}
        />
        <ExpensesList items={filteredExpeses} filterYear={filterYear} />
      </Card>
    </div>
  );
}
export default Expenses;
