import "./ExpenseItem.css"

function ExpenseItem(){

    const expenseDate = new Date(2021,2,28)
    const expenseTitle = 'Car Insurance '
    const expenseAmount = 294.67
    const LocationOfExpenditure = 'LIC KOLLAM BRANCH'
    return (
            <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div classNmae="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
            </div> 
            <br></br> 
            <div className="expense-item__description">spend on:<br></br>  {LocationOfExpenditure}  </div>
            </div>                 
);

}

export  default ExpenseItem