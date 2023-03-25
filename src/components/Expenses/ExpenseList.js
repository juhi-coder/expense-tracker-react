import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList=(props)=>{
if(props.item.length===0){
    return <h2 className="expenses-list-fallback">No Expenses Found.</h2>
}

    return <ul className="expense-list">
          {props.item.map((expense)=>(
            <ExpenseItem 
            key={expense.id}
            date={expense.date} 
            title={expense.title} 
             amount={ expense.amount }/>
             ))}
    </ul>
}
export default ExpenseList;