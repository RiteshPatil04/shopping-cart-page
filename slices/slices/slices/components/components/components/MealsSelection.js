import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMeal, setGuestCount } from '../slices/mealsSlice';

export default function MealsSelection() {
  const meals = useSelector(state => state.meals.meals);
  const selectedMealId = useSelector(state => state.meals.selectedMealId);
  const guestCount = useSelector(state => state.meals.guestCount);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Meal Options</h2>
      <div>
        <label>
          Number of Guests: 
          <input
            type="number"
            min="0"
            value={guestCount}
            onChange={(e) => dispatch(setGuestCount(Number(e.target.value)))}
            style={{ width: '60px', marginLeft: '8px' }}
          />
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        {meals.map(meal => (
          <label key={meal.id} style={{ display: 'block', marginBottom: '6px' }}>
            <input
              type="radio"
              name="meal"
              checked={selectedMealId === meal.id}
              onChange={() => dispatch(selectMeal(meal.id))}
            />
            {` ${meal.name} - $${meal.price} per guest`}
          </label>
        ))}
      </div>
    </section>
  );
}
