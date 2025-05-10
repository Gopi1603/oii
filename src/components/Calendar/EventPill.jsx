// src/components/Calendar/EventPill.jsx
import React from 'react';

const EventPill = ({ title, color, startTime, endTime, conflict }) => (
  <div
    className={
      'event-pill' + (conflict ? ' event-pill--conflict' : '')
    }
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '8px',
      fontSize: '12px',
      fontWeight: 500,
      background: `${color}33`,       // 20% opacity
      borderLeft: `4px solid ${color}`,
      borderRadius: '4px',
      padding: '2px 6px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
  >
    <span className="event-pill__text">{title}</span>
    <span className="event-pill__time">{startTime}–{endTime}</span>
  </div>
);

export default EventPill;
