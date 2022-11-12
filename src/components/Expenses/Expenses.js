
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";
import Filter from './filter';
import React, {useState} from 'react'

const Expense = (props) =>{
    const [filterYear,setFilterYear] = useState('2019')
    const expenses= props.expenseValue
    const filterChangeHandler = (selectedYear)=>{
        setFilterYear(selectedYear)
    }

    const filteredExpenses = expenses.filter((expense)=>{
        console.log(expense.date.getFullYear())
        return expense.date.getFullYear()== filterYear
    })
     
    var expenseitems = filteredExpenses.map((expense)=>{
        return <ExpenseItem key={expense.id} title = {expense.title} amount=  {expense.amount} LocationOfExpenditure =  {expense.LocationOfExpenditure}  date = {expense.date}></ExpenseItem>
    })

    return <Card>
         <Filter selected={filterYear} onChangeFilter={filterChangeHandler}></Filter>
        {expenseitems}</Card>

}

export default Expense;