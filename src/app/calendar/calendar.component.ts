import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { EventInput } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  calenderOptions: CalendarOptions = {
    editable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth',
      // right: 'listDay, listWeek, listMonth,  timeGridDay',
    },
    nowIndicator: true,
    // initialView: 'listWeek',
    initialView: window.innerWidth >= 765 ? 'listWeek' : 'listDay',
    plugins: [dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin],
    eventContent: this.eventTemplateContent,
    dateClick: (arg) => this.handleDateClick(arg),
    allDaySlot: false,
    aspectRatio: 1.5,
    // slotMinTime: '08:00:00',
    // slotMaxTime: '22:00:00',
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    },
  };

  calendarEvents: EventInput[] = [
    {
      id: '1',
      title: 'Meeting with Team',
      start: '2024-11-06T10:00:00',
      end: '2024-11-06T12:00:00',
      extendedProps: {
        state: 'Scheduled',
        location: 'Conference Room A',
      },
    },
    {
      id: '2',
      title: 'Project Review',
      start: '2024-11-06T14:00:00',
      end: '2024-11-06T15:30:00',
      extendedProps: {
        state: 'In Progress',
        location: '1234 Maple, Columbia, USA',
      },
    },
    {
      id: '3',
      title: 'Design Workshop',
      start: '2024-11-07T09:00:00',
      end: '2024-11-07T11:00:00',
      extendedProps: {
        state: 'Scheduled',
        location: 'Studio Room',
      },
    },
    {
      id: '4',
      title: 'Lunch with Client',
      start: '2024-11-08T12:00:00',
      end: '2024-11-08T13:30:00',
      extendedProps: {
        state: 'Scheduled',
        location: 'Downtown Cafe',
      },
    },
    {
      id: '5',
      title: 'Team Building Activity',
      start: '2024-11-09T10:00:00',
      end: '2024-11-09T15:00:00',
      extendedProps: {
        state: 'Scheduled',
        location: 'Outdoor Grounds',
      },
    },
    {
      id: '6',
      title: 'Development Sprint',
      start: '2024-11-10T09:00:00',
      end: '2024-11-12T17:00:00',
      extendedProps: {
        state: 'In Progress',
        location: 'Office',
      },
    },
    {
      id: '7',
      title: 'Presentation Prep',
      start: '2024-11-13T09:00:00',
      end: '2024-11-13T12:00:00',
      extendedProps: {
        state: 'Scheduled',
        location: 'Meeting Room B',
      },
    },
    {
      id: '8',
      title: 'Conference Call',
      start: '2024-11-14T16:00:00',
      end: '2024-11-14T17:00:00',
      extendedProps: {
        state: 'Scheduled',
        location: 'Remote',
      },
    },
  ];

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
  handleEventDrop(eventDropInfo: any) {
    const updatedEvent = this.calendarEvents.find(
      (event) => event.id === eventDropInfo.event.id
    );
    if (updatedEvent) {
      updatedEvent.date = eventDropInfo.event.startStr;
      console.log(`Task "${updatedEvent.title}" moved to ${updatedEvent.date}`);
    }
  }

  eventTemplateContent(arg: any) {
    const { extendedProps, start, end } = arg.event;
    const state = extendedProps.state;
    const location = extendedProps.location;
    const startTime = new Date(start).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const endTime = new Date(end).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const html = `
      <div class="custom-event-card">
        <div class="event-time">${startTime} - ${endTime}</div>
        <div class="event-location">${location}</div>
        <div class="event-state">${state}</div>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return { domNodes: [div] };
  }
}
