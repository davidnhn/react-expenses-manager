import React, { useState } from 'react';

import './ExpenseForm.css';

const ExepenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(''); //! Multistate way, reload une seul inputn, celui modifié
  const [form, setForm] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // }); //! One state , reload toutes les input vallue a chaque fois qu'on en modifie un

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value); //!Multistate
    // setUserInput({//! One state
    //   ...userInput,
    //   enteredTitle: e.target.value //!One state,  si on met que cette ligne on perd les deux autre au reload
    // });
    // setUserInput((prevState) => {//*facon la plus safe on mono state
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value //!One state,  si on met que cette ligne on perd les deux autre au reload
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value //!One state,  si on met que cette ligne on perd les deux autre au reload
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData); // function qu'on recupere d'un composant parent(avec props), a qui on passe des paramatre (notre data) et qu'on execute/renvoie avec la donnée
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    toggleForm();
  };

  const toggleForm = (e) => {
    setForm((previousForm) => !previousForm);
  };

  if (!form) {
    return (
      <div>
        <button onClick={toggleForm} type="submit">
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={toggleForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExepenseForm;
