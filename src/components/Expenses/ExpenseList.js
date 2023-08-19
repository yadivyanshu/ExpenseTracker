import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No expense found...</h2> ;
    }

    return (<ul className='expenses-list'>
        {props.items.map((exp) => (
        <ExpenseItem key = {exp.id} title={exp.title} amount={exp.amount} date={exp.date} />
        ))}
    </ul>
    );
}

export default ExpenseList;