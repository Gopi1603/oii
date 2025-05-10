// src/utils/eventLoader.js

// Load events from both static JSON and localStorage
export async function loadEvents() {
  const staticE = await fetch('/events.json').then(r => r.json());
  const stored = JSON.parse(localStorage.getItem('savedEvents') || '[]');
  return [...staticE, ...stored];
}

// Save a new event to localStorage
export function saveEvent(ev) {
  const stored = JSON.parse(localStorage.getItem('savedEvents') || '[]');
  stored.push(ev);
  localStorage.setItem('savedEvents', JSON.stringify(stored));
}
