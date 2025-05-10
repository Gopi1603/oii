import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Added
import '../../styles/components/CalendarHeader.css';

import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import ToggleGroup from '../../components/Controls/ToggleGroup';

const CalendarHeader = () => {
  const [activeDays, setActiveDays] = useState(['Mon', 'Thu']);
  const navigate = useNavigate(); // ← Added

  const allDays = [
    { label: 'Mon', value: 'Mon' },
    { label: 'Tue', value: 'Tue' },
    { label: 'Wed', value: 'Wed' },
    { label: 'Thu', value: 'Thu' },
    { label: 'Fri', value: 'Fri' },
    { label: 'Sat', value: 'Sat' },
    { label: 'Sun', value: 'Sun' }
  ];

  const toggleDay = (day) => {
    setActiveDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const currentYear = new Date().getFullYear(); // ← Get current year

  return (
    <div className="calendar-header">
      {/* Top label */}
      <span className="calendar-header__label">Weekly</span>

      {/* Main title */}
      <h1 className="calendar-header__title">Little Tigers Karate</h1>

      {/* Year View Button */}
      <button
        className="calendar-header__year-btn"
        title="Switch to Year View"
        onClick={() => navigate(`/year/${currentYear}`)}
      >
        📅 Year View
      </button>

      {/* Details row */}
      <div className="calendar-header__details">
        <div className="calendar-header__detail-item">
          <UserIcon className="calendar-header__icon" />
          <span>Members – 25 of 30</span>
        </div>
        <div className="calendar-header__detail-item">
          <ClockIcon className="calendar-header__icon" />
          <span>Time – 3:00 PM – 4:00 PM</span>
        </div>

        {/* Edit button */}
        <button className="calendar-header__edit-btn">
          <EditIcon className="calendar-header__edit-icon" />
          Edit Master Event
        </button>
      </div>

      {/* Day-of-Week Toggles */}
      <ToggleGroup
        options={allDays}
        selected={activeDays}
        onChange={toggleDay}
      />
    </div>
  );
};

export default CalendarHeader;
