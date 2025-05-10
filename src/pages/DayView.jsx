// src/pages/DayView.jsx
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import { saveEvent } from '../utils/eventLoader';
import '../styles/pages/DayView.css';

export default function DayView() {
  const { date } = useParams();
  const navigate = useNavigate();
  const allEvents = useEvents();
  const events = allEvents.filter(ev => ev.date === date);
  const [showForm, setShowForm] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [color, setColor] = useState('#3399ff');

  // compute prev/next
  const curr = new Date(date);
  const prev = new Date(curr);
  prev.setDate(curr.getDate() - 1);
  const next = new Date(curr);
  next.setDate(curr.getDate() + 1);
  const prevIso = prev.toISOString().slice(0,10);
  const nextIso = next.toISOString().slice(0,10);
  const formatted = curr.toLocaleDateString('en-US', {
    weekday:'long', month:'long', day:'numeric', year:'numeric'
  });

  // check if today
  const isToday = date === new Date().toISOString().slice(0,10);

  return (
    <div className="day-view">
      {/* Breadcrumb */}
      <div className="day-view__breadcrumb">
        <Link to="/" className="day-view__breadcrumb-link">
          ← Events / My Calendar
        </Link>
      </div>

      {/* Header with prev/next, title, actions */}
      <div className="day-view__header">
        <button
          className="ctrl-btn"
          title="Previous Day"
          onClick={() => navigate(`/day/${prevIso}`)}
        >‹</button>

        <h2 className={`day-view__title${isToday ? ' day-view__title--today' : ''}`}>
          {formatted}
        </h2>

        <button
          className="ctrl-btn"
          title="Next Day"
          onClick={() => navigate(`/day/${nextIso}`)}
        >›</button>

        <div className="day-view__actions">
          <button className="btn-sm" onClick={() => setShowForm(true)}>
            + Add Event
          </button>
          <button className="btn-sm" onClick={() => navigate('/events')}>
            All Events
          </button>
        </div>
      </div>

      {/* Events list or empty state */}
      {events.length ? (
        <ul className="day-view__list">
          {events.map((ev,i)=>(
            <li key={i} className="day-view__item" style={{ borderLeft:`4px solid ${ev.color}`, background:`${ev.color}22` }}>
              <span className="day-view__item-time">{ev.startTime}</span>
              <span className="day-view__item-title">{ev.title}</span>
              <button className="day-view__item-edit">Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="day-view__no-events">No events scheduled for this day.</p>
      )}

      {/* Add/Edit form */}
      {showForm && (
        <div className="day-view__form">
          <h3>Add Event on {formatted}</h3>
          <input type="text" placeholder="Title" value={title}
            onChange={e=>setTitle(e.target.value)} />
          <div className="day-view__form-row">
            <input type="time" value={startTime}
              onChange={e=>setStartTime(e.target.value)} />
            <input type="time" value={endTime}
              onChange={e=>setEndTime(e.target.value)} />
            <input type="color" value={color}
              onChange={e=>setColor(e.target.value)} />
          </div>
          <div className="day-view__form-actions">
            <button onClick={()=>{
              saveEvent({ date, title, startTime, endTime, color });
              setShowForm(false);
              navigate(0);
            }}>Save</button>
            <button className="btn-cancel" onClick={()=>setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
