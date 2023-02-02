import React from 'react';
import Expense from "./components/Expense";
//import Card from "./components/Card";

function App() {
  const expenses = [
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
    ,{
      title: 'pen',
      amount: 5,
      date: new Date(2022, 7, 14)
    }
  ]
  
  return (
    <div>
    <h2>Let's get started!</h2>
  <Expense expenses={expenses}/>  
  </div>
  );
}

export default App;