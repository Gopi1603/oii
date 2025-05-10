// returns array of { date: Date, isCurrentMonth: boolean }
// firstDayOfWeek: 0=Sunday, 1=Monday, ..., 6=Saturday
export function generateCalendarDates(year, month, firstDayOfWeek = 1) {
  const dates = [];
  // Get day of week for the 1st of the month (0=Sun...6=Sat)
  const rawFirst = new Date(year, month, 1).getDay();
  // Calculate offset based on the desired first day of the week
  const offset = (rawFirst - firstDayOfWeek + 7) % 7;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Fill days from previous month
  for (let i = offset - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    dates.push({ date: d, isCurrentMonth: false });
  }

  // Fill days of current month
  for (let d = 1; d <= daysInMonth; d++) {
    dates.push({ date: new Date(year, month, d), isCurrentMonth: true });
  }

  // Fill remaining cells to complete 6 weeks (6x7=42)
  const tail = 42 - dates.length;
  for (let i = 1; i <= tail; i++) {
    dates.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
  }

  return dates;
}
