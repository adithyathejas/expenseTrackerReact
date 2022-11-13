import React,{useState} from "react"

import ExpenseForm from "./ExpenseForm"
import {Card} from "../UI/Card"
import { Button } from "@mui/material"

const NewExpense = (prop)=>{
    const [isEditing,setIsEditing ]= useState(false)

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    

return ( 
<Card>
<div className = "new-expense"> {!isEditing && ( <Button variant="contained" onClick = { startEditingHandler } > Add New Expense </Button>)} 
       {isEditing && ( <ExpenseForm onSaveExpenseData = {prop.onSaveExpenseData } onClick = { stopEditingHandler}/>)}
        </div>
</Card>

)
}

export default NewExpense