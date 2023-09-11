import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from '../Ingredients/IngredientList'

import Search from './Search';

// You can write function Ingredients like const Ingredients = () => {}
function Ingredients() {

  const [userIngredients, setUserIngredients] = useState([]);  //Array here because a list of Ingredients


  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients =>
      [...prevIngredients,
      { id: Math.random().toString(), ...ingredient }]);
  }

  const removeIngredientHandler = ingredientId => {
    console.log(ingredientId, "ingredient id");
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientId))

  }


  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        {/* This is mapping/ for looping over a all my ingredients. Below is basically my
        component with a V-for */}
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />   {/* ingredients is my prop I am passing into the component */}
      </section>
    </div>
  );
}

export default Ingredients;
