import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { ViewSelectorComponent } from '../view-selector/view-selector.component';
@Component({
  selector: 'app-sheduler',
  standalone: true,
  imports: [TaskCardComponent, CommonModule, ViewSelectorComponent],
  templateUrl: './sheduler.component.html',
  styleUrl: './sheduler.component.scss',
})
export class SchedulerComponent implements OnInit {
  currentTimePosition: string = '0px';
  currentView: string = 'week'; // Default view
  calendarEvents: Task[] = [
    {
      id: '1',
      title: 'Meeting with Team',
      start: '2024-11-06T10:00:00',
      end: '2024-11-06T12:00:00',
      extendedProps: { state: 'Scheduled', location: 'Conference Room A' },
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
      end: '2024-11-08T11:00:00',
      extendedProps: { state: 'Scheduled', location: 'Studio Room' },
    },
    // Add other events as needed
  ];
  eventsToDisplay: Task[] = [];
  ngOnInit() {
    // Additional initialization if needed
    this.setCurrentTimePosition();
    setInterval(() => this.setCurrentTimePosition(), 60000);
  }

  onViewChange(view: any) {
    this.currentView = view; // Correctly handle the string value
    console.log(view);
    this.updateEventsForView();
    // Logic to filter or reformat calendarEvents based on the selected view
  }

  handleEvent(args: any): any {
    this.currentView = args;
    console.log(args);
  }

  // Helper functions to filter events for day, week, or month views
  getEventsForDay(day: Date): Task[] {
    return this.calendarEvents.filter(
      (event) => new Date(event.start).toDateString() === day.toDateString()
    );
  }

  getEventsForWeek(startOfWeek: Date): Task[] {
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    return this.calendarEvents.filter((event) => {
      const eventDate = new Date(event.start);
      return eventDate >= startOfWeek && eventDate < endOfWeek;
    });
  }

  getEventsForMonth(month: Date): Task[] {
    return this.calendarEvents.filter((event) => {
      const eventDate = new Date(event.start);
      return (
        eventDate.getMonth() === month.getMonth() &&
        eventDate.getFullYear() === month.getFullYear()
      );
    });
  }

  getWeekDates(): Date[] {
    // Calculate start and end dates of the current week
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day;
    });
  }

  getDayHours(): number[] {
    return Array.from({ length: 24 }, (_, i) => i);
  }

  getDaysInMonth(): Date[] {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return Array.from(
      { length: daysInMonth },
      (_, i) => new Date(year, month, i + 1)
    );
  }
  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
    const startOfWeek = new Date(date.setDate(diff));
    startOfWeek.setHours(0, 0, 0, 0); // Start at the beginning of the day
    return startOfWeek;
  }

  getEventColor(event: Task): string {
    switch (event.extendedProps.state) {
      case 'Scheduled':
        return '#326DD0';
      case 'In Progress':
        return '#ECA000';
      case 'Completed':
        return '#40A14D';
      default:
        return '#000';
    }
  }
  getEventsForHour(hour: number) {
    return this.calendarEvents.filter((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      // Check if the event overlaps with the given hour
      return (
        (eventStart.getHours() <= hour && eventEnd.getHours() > hour) ||
        (eventStart.getHours() === hour && eventStart.getMinutes() > 0) ||
        (eventEnd.getHours() === hour && eventEnd.getMinutes() > 0)
      );
    });
  }

  setCurrentTimePosition(): void {
    const currentTime = new Date();
    // Assuming you're setting it relative to the top of the scheduler
    // Calculate the position based on your scheduler's time scale
    const position = currentTime.getHours() * 60 + currentTime.getMinutes(); // Example calculation
    this.currentTimePosition = `${position}px`; // Update the position in px
  }

  updateEventsForView() {
    const currentDate = new Date();
    if (this.currentView === 'day') {
      this.eventsToDisplay = this.getEventsForDay(currentDate);
    } else if (this.currentView === 'week') {
      const startOfWeek = this.getStartOfWeek(currentDate);
      this.eventsToDisplay = this.getEventsForWeek(startOfWeek);
    } else if (this.currentView === 'month') {
      this.eventsToDisplay = this.getEventsForMonth(currentDate);
    }
  }
}
