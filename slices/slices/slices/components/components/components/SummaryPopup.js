import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSummary } from '../slices/uiSlice';

export default function SummaryPopup() {
  const dispatch = useDispatch();
  const summaryVisible = useSelector(state => state.ui.summaryVisible);

  const { rooms, selectedRoomIds } = useSelector(state => state.venue);
  const addOnsItems = useSelector(state => state.addOns.items);
  const addOnsSelected = useSelector(state => state.addOns.selected);
  const meals = useSelector(state => state.meals.meals);
  const selectedMealId = useSelector(state => state.meals.selectedMealId);
  const guestCount = useSelector(state => state.meals.guestCount);

  // Calculate subtotals
  const venueSubtotal = selectedRoomIds.reduce((sum, id) => {
    const room = rooms.find(r => r.id === id);
    return sum + (room ? room.price : 0);
  }, 0);

  const addOnsSubtotal = Object.entries(addOnsSelected).reduce((sum, [id, qty]) => {
    const item = addOnsItems.find(i => i.id === Number(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const mealPrice = meals.find(m => m.id === selectedMealId)?.price || 0;
  const mealsSubtotal = mealPrice * guestCount;

  const totalCost = venueSubtotal + addOnsSubtotal + mealsSubtotal;

  if (!summaryVisible) {
    return (
      <button onClick={() => dispatch(toggleSummary())} style={{ marginTop: '20px' }}>
        Show Summary
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        border: '2px solid #444',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '600px',
        zIndex: 1000,
      }}
    >
      <h2>Summary of Selections</h2>
      <table width="100%" border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {selectedRoomIds.length === 0 && addOnsItems.length === 0 && guestCount === 0 && (
            <tr><td colSpan="3" style={{ textAlign: 'center' }}>No selections made yet.</td></tr>
          )}

          {selectedRoomIds.map(id => {
            const room = rooms.find(r => r.id === id);
            if (!room) return null;
            return (
              <tr key={'room-' + id}>
                <td>{room.name}</td>
                <td>1</td>
                <td>${room.price.toFixed(2)}</td>
              </tr>
            );
          })}

          {Object.entries(addOnsSelected).map(([id, qty]) => {
            const item = addOnsItems.find(i => i.id === Number(id));
            if (!item) return null;
            return (
              <tr key={'addon-' + id}>
                <td>{item.name}</td>
                <td>{qty}</td>
                <td>${(item.price * qty).toFixed(2)}</td>
              </tr>
            );
          })}

          {selectedMealId && guestCount > 0 && (
            <tr>
              <td>{meals.find(m => m.id === selectedMealId)?.name} (Meal)</td>
              <td>{guestCount}</td>
              <td>${mealsSubtotal.toFixed(2)}</td>
            </tr>
          )}

          <tr style={{ fontWeight: 'bold', borderTop: '2px solid #444' }}>
            <td colSpan="2" style={{ textAlign: 'right' }}>Total:</td>
            <td>${totalCost.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => dispatch(toggleSummary())}
        style={{ marginTop: '15px', padding: '8px 15px', cursor: 'pointer' }}
      >
        Close Summary
      </button>
    </div>
  );
}
