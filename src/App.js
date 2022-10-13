import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure : 'Dhanya supermarket'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),
     LocationOfExpenditure : 'Samsung Electronics'},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),LocationOfExpenditure : 'LIC Kollam BRANCH'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure : 'ANILKUMAR FURNITURES, TVM'
    },
  ];
 const array=[]
  for(let i=0;i<expenses.length;i++){
    array.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} LocationOfExpenditure = {expenses[i].LocationOfExpenditure}  ></ExpenseItem>)
 }
    return (
    
      <div>
        <h2>Let's get started!</h2>
        {array} 
      </div>
    );
  }
  


export default App;
