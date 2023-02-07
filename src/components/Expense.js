import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpensesChart';
//import Card from "./Card";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })
  
  return (
    <div>
      <div className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expense