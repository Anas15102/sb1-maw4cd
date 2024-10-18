import { Component } from '@angular/core';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  profile = {
    fullName: '',
    graduationYear: '',
    fieldOfStudy: '',
    jobTitle: '',
    company: '',
  };

  isNewProfile = true;

  constructor() {
    // In a real app, you'd check if a profile exists and load it
    // For now, we'll assume it's always a new profile
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Profile submitted:', this.profile);
      // Here you would typically send this data to a server
      alert('Profile ' + (this.isNewProfile ? 'created' : 'updated') + ' successfully!');
    } else {
      alert('Please fill in all fields');
    }
  }

  isFormValid(): boolean {
    return Object.values(this.profile).every(value => value.trim() !== '');
  }
}