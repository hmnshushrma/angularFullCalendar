import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import the module

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FullCalendarModule], // Add the module
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
