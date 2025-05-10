// src/pages/EventsView.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import "../styles/pages/EventsView.css";

export default function EventsView() {
  const events = useEvents();
  const navigate = useNavigate();

  return (
    <div className="events-page">
      {/* Breadcrumb */}
      <div className="events-page__breadcrumb">
        <Link to="/" className="events-page__breadcrumb-link">
          ← Events / My Calendar
        </Link>
      </div>

      <h2 className="events-page__title">All Events</h2>

      <ul className="events-page__list">
        {events.map((ev, i) => (
          <li
            key={i}
            className="events-page__item"
            style={{
              borderLeft: `4px solid ${ev.color}`,
              background: `${ev.color}22`
            }}
            onClick={() => navigate(`/day/${ev.date}`)}
          >
            <div className="events-page__item-meta">
              <span className="events-page__date">{ev.date}</span>
              <span className="events-page__time">{ev.startTime}</span>
            </div>
            <div className="events-page__item-title">{ev.title}</div>
          </li>
        ))}
      </ul>
    </div>
);
}
