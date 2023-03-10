import './NewExpense.css';
import React from 'react';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        // const randomNumberString = Math.random().toString();
        // const randomNumberInteger = parseInt(randomNumberString);
        const NewExpenseData ={
            ...enteredExpenseData
        }
        // console.log(NewExpenseData);
        props.onAddExpense(NewExpenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;