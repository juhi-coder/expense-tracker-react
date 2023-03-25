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


    const filterdExpenses=props.item.filter(expense=>{
        return expense.date.getFullYear().toString()==filteredYear
    })

    return(
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {/* {filterdExpenses.length===0 && <p>No Expense Found</p>} */}

        {filterdExpenses.length===1?"Only single Expense here. Please add more...":filterdExpenses.map((expense)=>(
                <ExpenseItem 
                key={expense.id}
                date={expense.date} 
                title={expense.title} 
                 amount={ expense.amount }/>
                 ))}
        </Card>
        </div>
    );
};
export default Expenses;