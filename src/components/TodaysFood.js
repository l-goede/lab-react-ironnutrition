import React from 'react';

function TodaysFood(props) {
  const { sumFood } = props;
  console.log(sumFood);
  const total = sumFood.reduce((sum, elem) => {
    return sum + elem.quantity * elem.calories;
  }, 0);
  return (
    <div>
      <h1>Today's food</h1>
      {sumFood.map((elem) => {
        const { quantity, name, calories } = elem;
        return (
          <div>
            {quantity} {name} = {quantity * calories}
          </div>
        );
      })}
      <h1>Total ${Math.round(total)}</h1>
    </div>
  );
}

export default TodaysFood;
