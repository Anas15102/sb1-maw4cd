import { Component } from '@angular/core';

@Component({
  selector: 'ns-job-portal',
  templateUrl: './job-portal.component.html',
})
export class JobPortalComponent {
  jobs = [
    { title: 'Software Engineer', company: 'Tech Corp', location: 'New York' },
    { title: 'Data Analyst', company: 'Data Insights', location: 'San Francisco' },
    { title: 'Product Manager', company: 'Innovation Inc', location: 'Boston' },
  ];

  constructor() {}
}