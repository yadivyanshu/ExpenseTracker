import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const Dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 4, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 9, 28),
  },
  {
    id: 'e4',
    title: 'Headphone',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  { id: 'e5', title: 'New TV', amount: 499.49, date: new Date(2021, 6, 12) },
  {
    id: 'e6',
    title: 'Phone',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e7',
    title: 'Laptop',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {

  const[expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = exp => {
    setExpenses((previousExpenses) => {
      return [exp, ...previousExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
