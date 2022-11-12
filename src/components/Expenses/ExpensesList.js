import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) =>{

     if(props.items.length===0){
        return <h2 className="expenses-list__fallback">No Expenses found</h2>
     } 

     if(props.items.length===1){
        return (
            <ul className="expenses-list"> 
    {props.items.map((expense) => 
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                LocationOfExpenditure={expense.LocationOfExpenditure}
                date={expense.date}
              ></ExpenseItem>
            )
             
    }
    <h2>Only single Expense here. Please add more...</h2>
  </ul>

        )
     }
    
    return (
    <ul className="expenses-list"> 
    {props.items.map((expense) => 
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                LocationOfExpenditure={expense.LocationOfExpenditure}
                date={expense.date}
              ></ExpenseItem>
            )
             
    }
  </ul> ) 

}

export default ExpensesList