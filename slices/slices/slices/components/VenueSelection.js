import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRoom } from '../slices/venueSlice';

export default function VenueSelection() {
  const rooms = useSelector(state => state.venue.rooms);
  const selectedRoomIds = useSelector(state => state.venue.selectedRoomIds);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Choose Rooms</h2>
      {rooms.map(room => (
        <label key={room.id} style={{ display: 'block', marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={selectedRoomIds.includes(room.id)}
            onChange={() => dispatch(toggleRoom(room.id))}
          />
          {` ${room.name} - $${room.price}`}
        </label>
      ))}
    </section>
  );
}
