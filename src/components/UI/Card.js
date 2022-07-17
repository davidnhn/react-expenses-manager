import './Card.css';
import React from 'react';

function Card(props) {
  const classes = 'card ' + props.className; // <Card className="expense-item"> reçoit classe supplementaire du modulue enfant
  return <div className={classes}>{props.children}</div>; // props.children c'est ce qui sera entre les balise <Card></Card>
}

export default Card;
