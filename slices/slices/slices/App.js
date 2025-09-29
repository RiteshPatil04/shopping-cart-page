import React from 'react';
import VenueSelection from './components/VenueSelection';
import AddOnsSelection from './components/AddOnsSelection';
import MealsSelection from './components/MealsSelection';
import SummaryPopup from './components/SummaryPopup';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <h1>BudgetEase Conference Expense Planner</h1>
      <VenueSelection />
      <AddOnsSelection />
      <MealsSelection />
      <SummaryPopup />
    </div>
  );
}

export default App;
