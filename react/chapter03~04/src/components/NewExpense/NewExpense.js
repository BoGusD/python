import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
}
