import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterSaveHandler = (filterYear) => {
    setFilterYear(filterYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onSaveFilterData={filterSaveHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
