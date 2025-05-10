// src/components/Calendar/CalendarGrid.jsx
import React, { useState, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { generateCalendarDates } from "../../utils/dateUtils";
import { useEvents } from "../../hooks/useEvents";
import DateCell from "./DateCell";
import "../../styles/components/CalendarGrid.css";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function CalendarGrid() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // parse URL params or default to today
  const pY = parseInt(searchParams.get("year"), 10);
  const pM = parseInt(searchParams.get("month"), 10);
  const init = !isNaN(pY) && !isNaN(pM)
    ? new Date(pY, pM, 1)
    : new Date();

  const [viewDate, setViewDate] = useState(init);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // sync URL + state
  const goto = (y, m) => {
    const d = new Date(y, m, 1);
    setViewDate(d);
    navigate(`/?year=${d.getFullYear()}&month=${d.getMonth()}`, { replace: true });
  };
  const prevMonth = () => goto(year, month - 1);
  const nextMonth = () => goto(year, month + 1);

  // load & group events
  const events = useEvents();
  const eventsByDate = useMemo(() => {
    return events.reduce((acc, ev) => {
      (acc[ev.date] = acc[ev.date] || []).push(ev);
      return acc;
    }, {});
  }, [events]);

  // generate calendar cells (Mon→Sun)
  const cells = generateCalendarDates(year, month, 1);

  // ISOs for routing
  const iso = viewDate.toISOString().slice(0, 10);
  const todayIso = new Date().toISOString().slice(0, 10);

  return (
    <div className="calendar-page">
      {/* VIEW SWITCHER */}
      <div className="view-toggle">
        <button className="view-btn" onClick={() => navigate(`/year/${year}`)}>
          Year
        </button>
        <button
          className="view-btn view-btn--active"
          onClick={() => navigate(`/?year=${year}&month=${month}`)}
        >
          Month
        </button>
        <button className="view-btn" onClick={() => navigate(`/week/${iso}`)}>
          Week
        </button>
        <button className="view-btn" onClick={() => navigate(`/day/${iso}`)}>
          Day
        </button>
      </div>

      {/* MONTH HEADER (edge-positioned action buttons) */}
      <div className="month-header">
        {/* far‑left */}
        <div className="month-header__edge month-header__edge--left">
          <button
            className="btn-sm"
            onClick={() => navigate(`/day/${todayIso}`)}
          >
            + Add event
          </button>
        </div>

        <button className="ctrl-btn" onClick={prevMonth}>‹</button>

        <h1 className="month-header__title">
          {MONTH_NAMES[month]}’ {year}
        </h1>

        <button className="ctrl-btn" onClick={nextMonth}>›</button>

        {/* far‑right: go back “Home” (your month calendar) */}
        <div className="month-header__edge month-header__edge--right">
          <button
            className="btn-sm btn-outline"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="calendar-page__desc">
        Here all your planned events. You will find information for each event as well you can plan new one.
      </p>

      {/* WEEKDAY LABELS */}
      <div className="weekday-row">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(d => (
          <div key={d} className="weekday-cell">{d}</div>
        ))}
      </div>

      {/* DATE GRID */}
      <div className="calendar-grid">
        {cells.map(({ date, isCurrentMonth }, i) => {
          const key = date.toISOString().slice(0, 10);
          return (
            <DateCell
              key={i}
              date={date}
              isCurrentMonth={isCurrentMonth}
              events={eventsByDate[key] || []}
            />
          );
        })}
      </div>
    </div>
  );
}
