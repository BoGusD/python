import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2002</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.87</div>
      </div>
    </div>
  );
}
