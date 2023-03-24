import React ,{ useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{

    const [enteredtitle ,setEnteredtitle ]=useState('');
    const [enteredAmount  ,setEnteredAmount  ]=useState('');
    const [enteredDate  ,setEnteredDate  ]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredtitle(event.target.value);
    };

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }; 


    const submitHandler=(event)=>{
     event.preventDefault();

     const expenseData={
        title:enteredtitle,
        amount:enteredAmount,
        date: new Date(enteredDate)
     }
     props.onSaveData(expenseData);
     console.log(expenseData);

     setEnteredtitle('');
     setEnteredAmount('');
     setEnteredDate('');

    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
             <div className="new-expense__control">
             <label>Title</label>
              <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
             </div>
             
             <div className="new-expense__control">
             <label>Amount</label>
              <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
             </div>

             <div className="new-expense__control">
             <label>Date</label>
              <input type="date" value={enteredDate} onChange={dateChangeHandler} />
             </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
}
export default ExpenseForm;