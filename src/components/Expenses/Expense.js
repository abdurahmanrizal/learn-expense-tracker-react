import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const ExpensesData =
    filterYear != ""
      ? props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filterYear;
        })
      : props.items;

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseChart expenses={ExpensesData} />
      <ExpenseList items={ExpensesData} />
    </Card>
  );
};

export default Expense;
