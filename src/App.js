import React, { useState } from 'react';
import './App.css';
import foodJson from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';

function App() {
  const [foods, setFood] = useState(foodJson);
  const [showForm, setShowForm] = useState(false);

  function handleToggle() {
    setShowForm(!showForm);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
    };
    setFood([newFood, ...foods]);
  }

  return (
    <div>
      {showForm ? (
        <Form btnSubmit={handleSubmit} />
      ) : (
        <button onClick={handleToggle}>Add</button>
      )}

      {foods.map((elem, i) => {
        return <FoodBox key={i} food={elem} />;
      })}
    </div>
  );
}

export default App;
