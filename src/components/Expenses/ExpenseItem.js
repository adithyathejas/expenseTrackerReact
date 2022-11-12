import React, {useState} from 'react'

import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import {Card2} from "../UI/Card"

const ExpenseItem = (props)=>{
    const clickHandler = (e)=>{
        var li = e.target.parentElement.parentElement
        var lit= e.target.parentElement
        console.log(li)
        console.log(lit)
        li.removeChild(lit)
    };
    const [title,setTitle] = useState(props.title);
    

    const changeTitle = ()=>{
        setTitle('updated')
        console.log(title)
    }
    
    return (
        <li>
            <Card2>    
           <ExpenseDate date={props.date}/>
           <ExpenseDetails title={title} amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} ></ExpenseDetails> 
           <button onClick={clickHandler}> delete expense </button>
            <button onClick={changeTitle}>Change Title </button>                  
        </Card2>

        </li>
                               
);

}

export  default ExpenseItem