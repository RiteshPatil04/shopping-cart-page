import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Microphone', price: 30 },
    { id: 2, name: 'Projector', price: 100 },
    { id: 3, name: 'Whiteboard', price: 20 },
  ],
  selected: {}, // { id: quantity }
};

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState,
  reducers: {
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.selected[id];
      } else {
        state.selected[id] = quantity;
      }
    },
  },
});

export const { setQuantity } = addOnsSlice.actions;
export default addOnsSlice.reducer;
