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

  const[title,newTitle]= useState(props.title);
  const clickHandler=()=>{
    newTitle('new Title...');
  }

  const[title1,newTitle1]= useState(props.amount);
  const clickHandler1=()=>{
    newTitle1('100');
  }

  return (
    <Card className="expense-item">
      
      <div className="expense-item__description">
      <ExpenseDate date={props.date}/>
        <h2>{title}</h2>
        <button onClick={clickHandler}>Change Title</button>
        
        <div className="expense-item__price">${title1}</div>
      </div>
  
      <button onClick={clickHandler1}>Change Amount</button>
      <button type="button" onClick={()=> deleteExpenses(props.id)}>Delete Expenses</button>
    </Card>
  );
}
export default ExpenseItem;
