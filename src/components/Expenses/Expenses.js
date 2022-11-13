import { Card } from "../UI/Card";
import Filter from "./filter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("0");
  const expenses = props.expenseValue;
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = filterYear === "0"
      ? expenses
      : expenses.filter((expense) => {
          return expense.date.getFullYear().toString() === filterYear;
        });

  return (
    <Card>
      <Filter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      ></Filter>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expense;
