import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenses = [
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
      <ExpenseItem
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
      title = {expenses[1].title}
      amount = {expenses[1].amount}
      date = {expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
      title = {expenses[2].title}
      amount = {expenses[2].amount}
      date = {expenses[2].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;