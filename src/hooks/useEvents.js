import { useState, useEffect } from 'react';
import { loadEvents } from '../utils/eventLoader';

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadEvents().then(setEvents);
  }, []);
  return events;
};
