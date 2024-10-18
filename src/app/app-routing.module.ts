import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { DonationComponent } from './donation/donation.component'
import { NetworkingComponent } from './networking/networking.component'
import { JobPortalComponent } from './job-portal/job-portal.component'
import { EventsComponent } from './events/events.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'job-portal', component: JobPortalComponent },
  { path: 'events', component: EventsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}