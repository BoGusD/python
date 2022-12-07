import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSaveFilterData={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
