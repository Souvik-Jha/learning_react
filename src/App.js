import React,{useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense";
//import Card from "./components/Card";

const InitialExpenses = [
  {
    title: 'NoteBook',
    amount: 50,
    date: new Date(2022, 7, 14)
  },
  {
    title: 'Laptop',
    amount: 50000,
    date: new Date(2022, 11, 11)
  }
  , {
    title: 'pen',
    amount: 5,
    date: new Date(2022, 7, 14)
  }
]

function App() {

  const [expenses,setExpenses] = useState(InitialExpenses)
  

  const addExpenseHandler = (expense) =>{
    setExpenses([expense,...expenses])
  } 

  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;