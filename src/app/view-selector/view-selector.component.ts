import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-view-selector',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './view-selector.component.html',
  styleUrl: './view-selector.component.scss',
})
export class ViewSelectorComponent {
  @Output() viewChange: EventEmitter<string> = new EventEmitter<string>();
  // currentView: string = 'week'; // Default to 'week' view

  onViewSelect(view: string) {
    this.viewChange.emit(view);
  }
}
