import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
