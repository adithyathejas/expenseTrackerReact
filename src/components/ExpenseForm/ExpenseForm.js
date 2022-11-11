import React, { useState } from 'react';
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

    return <div>
        <form onSubmit={submitionHandler}> 
            <div>
                <label>Title</label>
                <input type='Text' value={enteredTitle} onChange={titleChangeHandler}></input>
                {enteredTitle}
            </div>
            <div>
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler}></input>
                {enteredAmount}
            </div>
            <div>
                <label>Date</label>
                <input type='date' value={enteredDate}  min='2000-01-01' onChange={dateChangeHandler}></input>
                {enteredDate}
            </div>
            <div>
                <label>Location Of Expenditure</label>
                <input type='Text'  value={enteredLocation} onChange={LocationChangeHandler}></input>
                {enteredLocation}
            </div>
            <button type="submit" >Add Expense </button>
        </form>
    </div>

}

export default ExpenseForm;