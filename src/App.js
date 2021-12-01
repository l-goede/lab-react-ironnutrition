import React, { useState } from 'react';
import './App.css';
import foodJson from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

function App() {
  const [foods, setFood] = useState(foodJson);
  const [showForm, setShowForm] = useState(false);
  const [foodCopy, setFoodCopy] = useState(foodJson);
  const [sumFood, setSumFood] = useState([]);

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

  function handleSearch(event) {
    let searchForFood = event.target.value;
    let filteredFood = foods.filter((elem) => {
      return elem.name.includes(searchForFood);
    });
    setFoodCopy(filteredFood);
  }

  function handleClick(food, quantity) {
    let totalFood = {
      name: food.name,
      quantity: quantity,
      calorie: food.calories,
    };
    setSumFood([totalFood, ...sumFood]);
  }

  return (
    <div>
      <Search btnSearch={handleSearch} />
      {showForm ? (
        <Form btnSubmit={handleSubmit} />
      ) : (
        <button onClick={handleToggle}>Add</button>
      )}

      {foodCopy.map((elem, i) => {
        return <FoodBox key={i} food={elem} btnClick={handleClick} />;
      })}
      <div class="column">
        <TodaysFood sumFood={sumFood} />
      </div>
    </div>
  );
}

export default App;
