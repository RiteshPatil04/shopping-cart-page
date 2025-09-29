import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [
    { id: 1, name: 'Main Hall', price: 500 },
    { id: 2, name: 'Conference Room A', price: 300 },
    { id: 3, name: 'Conference Room B', price: 250 },
  ],
  selectedRoomIds: [],
};

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    toggleRoom(state, action) {
      const id = action.payload;
      if (state.selectedRoomIds.includes(id)) {
        state.selectedRoomIds = state.selectedRoomIds.filter(roomId => roomId !== id);
      } else {
        state.selectedRoomIds.push(id);
      }
    },
  },
});

export const { toggleRoom } = venueSlice.actions;
export default venueSlice.reducer;
