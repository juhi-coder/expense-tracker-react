import React ,{useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";

const Expenses=(props)=>
{
    const[filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }


    const filterdExpenses=props.item.filter(expense=>{
        return expense.date.getFullYear().toString()==filteredYear
    })



    return(
    <div>
    <li>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpenseChart expen={filterdExpenses} />
    <ExpenseList item={filterdExpenses}/>
        </Card>
        </li>
        </div>
    );
};
export default Expenses;