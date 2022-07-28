import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses Not Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((element, i) => (
        <ExpenseItem data={element} key={i} />
      ))}
    </ul>
  );
};

export default ExpenseList;
