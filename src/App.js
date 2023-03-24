import Expenses  from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App=()=>
{
  let expenses=[
    {
      id:'e1',
      title:'school fee',
      amount:200,
      date:new Date(2023, 3, 12)
    },
    {
      id:'e2',
      title:'books',
      amount:500,
      date:new Date(2022, 7, 17)
    },
    {
      id:'e3',
      title:'cosmetic ',
      amount:1000,
      date:new Date(2000, 5, 15)
    },
    {
      id:'e4',
      title:'food ',
      amount:500,
      date:new Date(2021, 4, 14)
    }
  ]

  return (
  <div>
  <NewExpense />
  <Expenses item={expenses}/>
  </div>);
}

export default App;