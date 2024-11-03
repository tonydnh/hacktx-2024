// MyCalendar.js

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment Object to the correct localizer.
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Board Meeting',
      start: new Date(2024, 10, 5, 10, 0), // November is 10 in JS
      end: new Date(2024, 10, 5, 12, 0),
    },
    {
      title: 'Conference',
      start: new Date(2024, 10, 6, 10, 0),
      end: new Date(2024, 10, 6, 14, 0),
    },
    {
      title: 'Team Lunch',
      start: new Date(2024, 10, 7, 12, 0),
      end: new Date(2024, 10, 7, 13, 0),
    },
  ]);

  const onSelectEvent = (event) => {
    alert(event.title);
  };

  const onSelectSlot = (slotInfo) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents((prev) => [
        ...prev,
        {
          title,
          start: slotInfo.start,
          end: slotInfo.end,
        },
      ]);
    }
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        selectable
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
      />
    </div>
  );
};

export default MyCalendar;
