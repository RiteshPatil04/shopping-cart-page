import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summaryVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSummary(state) {
      state.summaryVisible = !state.summaryVisible;
    },
  },
});

export const { toggleSummary } = uiSlice.actions;
export default uiSlice.reducer;
