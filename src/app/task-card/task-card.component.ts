import { Component, Input } from '@angular/core';
import { Task } from '../../constants/task.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;

  getBorderColor(): string {
    switch (this.task.extendedProps.state) {
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
}
