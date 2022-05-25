import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [expensesFilter, setExpensesFilter] = useState("2020");

  const changeExpensesFilterHandler = (enteredExpensesYear) => {
    setExpensesFilter(enteredExpensesYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === expensesFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={expensesFilter}
        onChangeExpensesFilter={changeExpensesFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
