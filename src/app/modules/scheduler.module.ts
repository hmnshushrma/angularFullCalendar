import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from '../sheduler/sheduler.component';

@NgModule({
  declarations: [SchedulerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SchedulerComponent], // Import necessary modules here
  exports: [SchedulerComponent], // Export components that should be used outside
})
export class ShedulerModule {}
