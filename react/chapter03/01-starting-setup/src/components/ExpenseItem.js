import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{props.date.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
