import './ExpencesItem.css'

function ExpenseItem() {
    const expenseDate = new Date(1998, 3, 24)
    const expenseTitle = "PG"
    const expenseAmount = 9000

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem