import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle(newTitle);
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>

        <div className="expense-item__price">${props.amount}</div>
        <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={clickHandler}>Change Title</button>
      </div>

      {/* <button onClick={clickHandler1}>Change Amount</button> */}
      {/* <button type="button" onClick={()=> deleteExpenses(props.id)}>Delete Expenses</button> */}
    </Card>
  );
};
export default ExpenseItem;
