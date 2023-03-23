import React from "react";
import "./ExpenseItem.css";
import Card from'../UI/Card'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem=(props)=> {
  
  return (
    <Card className="expense-item">
      
      <div className="expense-item__description">
      <ExpenseDate date={props.date}/>
        <h2>{ props.title }</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>change title</button>
    </Card>
  );
}
export default ExpenseItem;
