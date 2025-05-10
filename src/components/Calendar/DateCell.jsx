// src/components/Calendar/DateCell.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventPill from './EventPill';
import '../../styles/components/DateCell.css';

const DateCell = ({ date, isCurrentMonth, events }) => {
  const navigate = useNavigate();
  const dayNum = date.getDate();
  const dateStr = date.toISOString().slice(0, 10);

  // Detect today
  const today = new Date();
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  // Sort events
  const sorted = [...events].sort((a, b) =>
    a.startTime.localeCompare(b.startTime)
  );

  return (
    <div
      className={
        `date-cell` +
        (isToday ? ' date-cell--today' : '') +
        (isCurrentMonth
          ? ''
          : ' date-cell--other-month date-cell--disabled')
      }
      onClick={() => isCurrentMonth && navigate(`/day/${dateStr}`)}
    >
      {/* date number */}
      <div className="date-number">{dayNum}</div>

      {/* underline */}
      <div className="date-underline"></div>

      {/* events */}
      <div className="events-container">
        {sorted.map((ev, i) => {
          const next = sorted[i + 1];
          const conflict = next && ev.endTime > next.startTime;
          return (
            <EventPill
              key={i}
              title={ev.title}
              color={ev.color}
              startTime={ev.startTime}
              conflict={conflict}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DateCell;
