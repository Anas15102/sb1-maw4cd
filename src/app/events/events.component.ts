import { Component } from '@angular/core';

@Component({
  selector: 'ns-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  events = [
    { name: 'Annual Alumni Meet', date: '2023-09-15', location: 'University Campus' },
    { name: 'Career Fair', date: '2023-10-20', location: 'Virtual Event' },
    { name: 'Homecoming Weekend', date: '2023-11-05', location: 'University Stadium' },
  ];

  constructor() {}
}