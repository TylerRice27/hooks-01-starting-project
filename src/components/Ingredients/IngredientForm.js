import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  // useState always returns two elements within an Array. The first is your current state snapshot
  // The second element is the updated state
  // const inputState = useState({ title: '', amount: '' });  // THIS is way you can do input field but harder to read not recommended


  // const [inputState, setInputState] = useState({ title: '', amount: '' }) //Better way! Data on the left, set new data on the right

  //  You can setup two useStates for your properties so your states are independent of one and another
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');   // Recommend way manage your state independently unless you need it be changed together

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
              value={enteredTitle}   // Work with data
              onChange={event => {
                setEnteredTitle(event.target.value);
              }
              } />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"
              // title at the very end of this line is making sure we dont loose that information when we are updating the amount
              value={enteredAmount}
              // React will just drop the title and only send you back item with only the amount on it
              onChange={event => {
                setEnteredAmount(event.target.value);
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
