import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PodcastComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
