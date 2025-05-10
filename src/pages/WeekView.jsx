import React, { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import EventPill from "../components/Calendar/EventPill";
import "../styles/pages/WeekView.css";

export default function WeekView() {
  const { date } = useParams();
  const base = date ? new Date(date) : new Date();
  const navigate = useNavigate();

  // Find Monday of that week
  const dayOfWeek = base.getDay(); // 0=Sun…6=Sat
  const mon = new Date(base);
  mon.setDate(base.getDate() - ((dayOfWeek + 6) % 7));

  // Prev/Next week
  const prev = new Date(mon);
  prev.setDate(mon.getDate() - 7);
  const next = new Date(mon);
  next.setDate(mon.getDate() + 7);

  // Build seven days
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    return d;
  });

  // Load events grouped by date
  const events = useEvents();
  const eventsByDate = useMemo(
    () =>
      events.reduce((acc, ev) => {
        (acc[ev.date] = acc[ev.date] || []).push(ev);
        return acc;
      }, {}),
    [events]
  );

  // Format title range: e.g. “May 12 – 18, 2025”
  const month = mon.toLocaleString("default", { month: "short" });
  const startDay = mon.getDate();
  const endDate = new Date(mon);
  endDate.setDate(mon.getDate() + 6);
  const endMonth = endDate.toLocaleString("default", { month: "short" });
  const endDay = endDate.getDate();
  const year = mon.getFullYear();
  const titleText =
    month === endMonth
      ? `${month} ${startDay} – ${endDay}, ${year}`
      : `${month} ${startDay} – ${endMonth} ${endDay}, ${year}`;

  return (
    <div className="week-page">
      {/* Breadcrumb */}
      <div className="week-page__breadcrumb">
        <Link to="/" className="week-page__breadcrumb-link">
          ← Events / My Calendar
        </Link>
      </div>

      {/* Header with nav + title + actions */}
      <div className="week-page__header">
        <button
          className="ctrl-btn"
          title="Previous Week"
          onClick={() => navigate(`/week/${prev.toISOString().slice(0,10)}`)}
        >
          ‹
        </button>

        <h2 className="week-page__title">{titleText}</h2>

        <button
          className="ctrl-btn"
          title="Next Week"
          onClick={() => navigate(`/week/${next.toISOString().slice(0,10)}`)}
        >
          ›
        </button>

        <div className="week-page__actions">
          <button
            className="btn-sm"
            onClick={() => navigate(`/day/${new Date().toISOString().slice(0,10)}`)}
          >
            Add Event
          </button>
          <button className="btn-sm" onClick={() => navigate("/events")}>
            All Events
          </button>
        </div>
      </div>

      {/* Grid of days */}
      <div className="week-grid">
        {days.map((d) => {
          const key = d.toISOString().slice(0,10);
          const evs = eventsByDate[key] || [];
          const isToday =
            key === new Date().toISOString().slice(0,10);

          return (
            <div
              key={key}
              className={`week-day${isToday ? " week-day--today" : ""}`}
              onClick={() => navigate(`/day/${key}`)}
            >
              <div className="week-day__label">
                {d.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "numeric",
                  day: "numeric"
                })}
              </div>
              <div className="week-day__events">
                {evs.map((e,i) => (
                  <EventPill
                    key={i}
                    title={e.title}
                    color={e.color}
                    startTime={e.startTime}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
