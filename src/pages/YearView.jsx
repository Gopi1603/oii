// src/pages/YearView.jsx
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/pages/YearView.css';

const monthNames = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

export default function YearView() {
  const { year } = useParams();
  const y = parseInt(year, 10);
  const navigate = useNavigate();

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  return (
    <div className="year-view">
      {/* Breadcrumb */}
      <Link to="/" className="breadcrumb">
        ← Events / My Calendar
      </Link>

      {/* Today Shortcut */}
      {y !== currentYear && (
        <button onClick={() => navigate(`/year/${currentYear}`)} className="ctrl-btn">
          Today
        </button>
      )}

      {/* Year header with prev/next */}
      <div className="year-view__header">
        <button onClick={() => navigate(`/year/${y - 1}`)} className="ctrl-btn">‹</button>
        <h2 className="year-view__title">{y}</h2>
        <button onClick={() => navigate(`/year/${y + 1}`)} className="ctrl-btn">›</button>
      </div>

      {/* 4×3 grid of months */}
      <div className="year-view__grid">
        {monthNames.map((m, idx) => (
          <div
            key={m}
            className={
              "year-view__month-card" +
              (y === currentYear && idx === currentMonth
                ? " year-view__month-card--today"
                : "")
            }
            onClick={() => navigate(`/?year=${y}&month=${idx}`)}
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
