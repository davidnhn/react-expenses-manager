import React from 'react';
// import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title); // useState retourne dans un array la stateful value et la fonciton pour update
  console.log('Exepense item evaluated');
  // const clickhandler = () => {
  //   setTitle('Updated');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickhandler}>Change title</button> */}
      </Card>
    </li>
  );
}
export default ExpenseItem;
