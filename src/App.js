import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

let DummyExpense = [];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpense);

function fetchData(){
  axios.get('http://localhost:4500/')
  .then(response => {
    console.log(response.data);
    setExpenses(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

  useEffect(() => {
   fetchData();
  }, []);
  
  

  const addExpenseHandler = (expense) => {
    console.log(expense)
    // const expenseJson = JSON.stringify(`${expense}`); 
 
    axios.post('http://localhost:4500/addExpense', expense)
      .then(response => {
        setExpenses([...expenses, response.data]);
        fetchData();
      })
      .catch(error => {
        console.error("Error adding expense:", error);
      });
  };
  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;


// import Expenses from './component/Expenses/Expenses';
// import NewExpense from './component/NewExpense/NewExpense';
// import React,{useEffect, useState} from 'react';

// let DummyExpense = [];
    
// const App = () => {
//     // let expenseDate = new Date(2021,3,28);
//     // let expenseTitle = "School Fee";
//     // let expenseAmount = 300;
  
//     const [expenses,setExpenses] = useState(DummyExpense);

//     useEffect( () => {
//         fetch("http://localhost:8000/")
//         .then( (response) => { return response.json(); } )
//         .then( (data) => { console.log(data); setExpenses(data); } )
//     },[] )

    

//     const addExpenseHandler = (expense) =>{
//       console.log(expense);
//       fetch("http://localhost:8000/addExpense", {
//         method: "POST",
//         body: JSON.stringify(expense),
//         headers: {
//           "Content-Type": "application/json"
//           // "Content-Type": "application/x-www-form-urlencoded"
//         }

//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//         })
//         .catch(error => {
//           console.error("Error adding expense:", error);
//         });
      
//     };

//     return(

//         <div>
//         <NewExpense onAddExpense={ addExpenseHandler }/>
//         <Expenses item={ expenses }/>
//         </div>
//         );
// }

// export default App;


