import React ,{useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses=(props)=>
{
    const[filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }

    return(
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {
        
        props.item.map(
            expense=>(
                <ExpenseItem 
                date={expense.date} 
                title={expense.title} 
                 amount={ expense.amount }/>
            )
        )
    }
        </Card>
    );
}
export default Expenses;