import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from '../slices/addOnsSlice';

export default function AddOnsSelection() {
  const items = useSelector(state => state.addOns.items);
  const selected = useSelector(state => state.addOns.selected);
  const dispatch = useDispatch();

  const handleChange = (id, e) => {
    const qty = Number(e.target.value);
    if (qty >= 0) {
      dispatch(setQuantity({ id, quantity: qty }));
    }
  };

  return (
    <section>
      <h2>Select Add-Ons</h2>
      {items.map(item => (
        <div key={item.id} style={{ marginBottom: '8px' }}>
          <label>
            {item.name} (${item.price} each):
            <input
              type="number"
              min="0"
              value={selected[item.id] || 0}
              onChange={(e) => handleChange(item.id, e)}
              style={{ width: '50px', marginLeft: '8px' }}
            />
          </label>
        </div>
      ))}
    </section>
  );
}
