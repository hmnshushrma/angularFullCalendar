import { Component } from '@angular/core';
import { SchedulerComponent } from '../sheduler/sheduler.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SchedulerComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  calendarEvents = [
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
}
