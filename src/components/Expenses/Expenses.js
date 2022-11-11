import React from 'react'
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";

const expenseItem = (props) =>{
    const expenses= props.expenseValue
    var expenseitems = expenses.map((expense)=>{
        return <ExpenseItem  title = {expense.title} amount=  {expense.amount} LocationOfExpenditure =  {expense.LocationOfExpenditure}  date = {expense.date}></ExpenseItem>
    })

    return <Card>{expenseitems}</Card>

}

export default expenseItem;