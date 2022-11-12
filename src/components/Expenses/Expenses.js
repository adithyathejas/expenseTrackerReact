
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";
import Filter from './filter';
import React, {useState} from 'react'

const Expense = (props) =>{
    const [filterYear,setFilterYear] = useState('0')
    const expenses= props.expenseValue
    const filterChangeHandler = (selectedYear)=>{
        setFilterYear(selectedYear)
    }

    const filteredExpenses = filterYear==='0'? expenses :  expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() === filterYear
    })
     
    var expenseitems = filteredExpenses.map((expense)=>{
        return <ExpenseItem key={expense.id} title = {expense.title} amount=  {expense.amount} LocationOfExpenditure =  {expense.LocationOfExpenditure}  date = {expense.date}></ExpenseItem>
    })

    return <Card>
         <Filter selected={filterYear} onChangeFilter={filterChangeHandler}></Filter>
        {expenseitems}</Card>

}

export default Expense;