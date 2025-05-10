// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContainer from './components/Layout/PageContainer';

import CalendarGrid from './components/Calendar/CalendarGrid';
import Dashboard    from './pages/Dashboard';      // ← About Me page
import EventsView   from './pages/EventsView';
import Messages     from './pages/Messages';
import Members      from './pages/Members';
import YearView     from './pages/YearView';
import WeekView     from './pages/WeekView';
import DayView      from './pages/DayView';

export default function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Routes>
          {/* Home = Month-view calendar */}
          <Route path="/" element={<CalendarGrid />} />

          {/* About Me / Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Full events list */}
          <Route path="/events" element={<EventsView />} />

          {/* Other routes */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/members"  element={<Members />} />
          <Route path="/year/:year" element={<YearView />} />
          <Route path="/week/:date" element={<WeekView />} />
          <Route path="/day/:date"  element={<DayView />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}
