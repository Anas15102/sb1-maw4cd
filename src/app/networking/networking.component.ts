import { Component } from '@angular/core';

@Component({
  selector: 'ns-networking',
  templateUrl: './networking.component.html',
})
export class NetworkingComponent {
  alumni = [
    { name: 'John Doe', graduationYear: 2015, company: 'Tech Corp' },
    { name: 'Jane Smith', graduationYear: 2018, company: 'Innovation Inc' },
    { name: 'Bob Johnson', graduationYear: 2020, company: 'Future Systems' },
  ];

  constructor() {}
}