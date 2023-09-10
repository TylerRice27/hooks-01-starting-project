import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  // useState always returns two elements within an Array. The first is your current state snapshot
  // The second element is the updated state
  const inputState = useState({ title: '', amount: '' });

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* on Change == event is the change event, target is the input field and value is the value in that field */}
            <input type="text" id="title"
              value={inputState[0].title}
              onChange={event => {
                const newTitle = event.target.value;
                inputState[1](prevInputState => ({
                  title: newTitle,
                  amount: prevInputState.amount
                }))
              }
              } />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"
              // title at the very end of this line is making sure we dont loose that information when we are updating the amount
              value={inputState[0].amount}
              // React will just drop the title and only send you back item with only the amount on it
              onChange={event => {
                const newAmount = event.target.value;
                inputState[1](prevInputState => ({
                  amount: newAmount,
                  title: prevInputState.title
                }))
              }
              } />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
