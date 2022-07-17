import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  //* State config
  const [year, setYear] = useState('2022');

  //* Recupere le filtre year renvoyé par l'enfant et l'enregistre dans le state
  const getSelectedYearHandler = (year) => {
    setYear(year);
  };
  console.log(+year, props.expenses[0].date.getFullYear());

  //* On filtrer les expenses par année séléctionée
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={getSelectedYearHandler}
        filteredYear={year}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
