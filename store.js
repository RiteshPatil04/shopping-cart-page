import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './slices/venueSlice';
import addOnsReducer from './slices/addOnsSlice';
import mealsReducer from './slices/mealsSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    venue: venueReducer,
    addOns: addOnsReducer,
    meals: mealsReducer,
    ui: uiReducer,
  },
});

export default store;
