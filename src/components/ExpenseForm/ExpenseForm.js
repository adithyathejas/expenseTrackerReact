import React, { useState } from 'react';
import  {Card}  from '../UI/Card';
import Button from "@mui/material/Button"
import { Input } from '@mui/material';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredLocation, setEnteredLocation] = useState('')
 
const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const LocationChangeHandler = (event)=>{
    setEnteredLocation(event.target.value)
  }
  const submitionHandler = (event)=>{
     event.preventDefault();
     const submition = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
        LocationOfExpenditure: enteredLocation
     }


     props.onSaveExpenseData(submition)
     setEnteredTitle('')
     setEnteredDate('')
     setEnteredAmount('')
     setEnteredLocation('')
  }

    return <Card>
        <form onSubmit={submitionHandler}> 
            <div>
                <label>Title &nbsp;</label>
                <Input type='Text' value={enteredTitle} onChange={titleChangeHandler}></Input>
                {enteredTitle}
            </div>
            <div>
                <label>Amount &nbsp;</label>
                <Input type='number' value={enteredAmount} onChange={amountChangeHandler}></Input>
                {enteredAmount}
            </div>
            <div>
                <label>Date&nbsp;  </label>
                <Input type='date' value={enteredDate}  min='2000-01-01' onChange={dateChangeHandler}></Input>
                {enteredDate}
            </div>
            <div>
                <label>Location Of Expenditure &nbsp;</label>
                <Input type='Text'  value={enteredLocation} onChange={LocationChangeHandler}></Input>
                {enteredLocation}
            </div>
            <Button variant="contained" type="submit" >Add Expense </Button>
        </form>
    </Card>

}

export default ExpenseForm;