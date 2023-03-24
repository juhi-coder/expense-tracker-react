import React ,{ useState } from "react";
import "./ExpenseItem.css";
import Card from'../UI/Card'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem=(props)=> {
  
  const[expenses,setTitle]= useState(props.expenses)

  const deleteExpenses=(id)=>{
    const newList = expenses.filter((props)=>props.id !== id)
    setTitle(newList);
  }
  return (
    <Card className="expense-item">
      
      <div className="expense-item__description">
      <ExpenseDate date={props.date}/>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button" onClick={()=> deleteExpenses(props.id)}>Delete Expenses</button>
    </Card>
  );
}
export default ExpenseItem;
