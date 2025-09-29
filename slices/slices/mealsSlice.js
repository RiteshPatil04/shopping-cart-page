import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meals: [
    { id: 1, name: 'Standard Meal', price: 25 },
    { id: 2, name: 'Vegetarian Meal', price: 30 },
    { id: 3, name: 'Premium Meal', price: 45 },
  ],
  selectedMealId: null,
  guestCount: 0,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    selectMeal(state, action) {
      state.selectedMealId = action.payload;
    },
    setGuestCount(state, action) {
      state.guestCount = action.payload;
    },
  },
});

export const { selectMeal, setGuestCount } = mealsSlice.actions;
export default mealsSlice.reducer;
