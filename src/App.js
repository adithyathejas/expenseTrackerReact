
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
    LocationOfExpenditure: "Dhanya supermarket",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
    LocationOfExpenditure: "Samsung Electronics",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: "LIC Kollam BRANCH",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: "ANI FURNITURES, TVM",
  },
];


const App = () => {
  
 

  const [expense,setExpense] = useState(expenses)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const enteredExpense = {
      id:Math.random(),...enteredExpenseData,
    }
    console.log(enteredExpense)
   
    setExpense((prevState)=>{
      return [...prevState,enteredExpenseData]

    })
  
  };

  return (
    
        <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      <Expenses expenseValue={expense}></Expenses>
    </div>
    
  );
};

export default App;
