import "./ExpenseItem.css"

function ExpenseItem(props){
    return (
            <div className="expense-item">
            <div>{'   '}{props.date.toISOString()}</div>
            <div classNmae="expense-item__description">
            <h2>{'   '}{props.title}</h2>
            <div className="expense-item__price">{'   '}{props.amount}</div>
            </div> 
             
            <div className="expense-item__description">spend on:<br></br>  {'   '}{props.LocationOfExpenditure}  </div>
            </div>                 
);

}

export  default ExpenseItem