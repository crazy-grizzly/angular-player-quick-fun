import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap';
import { LoadersCssModule } from 'angular2-loaders-css';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PodcastComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LoadersCssModule,
    TabsModule.forRoot(),
    SharedModule,
  ]
})
export class MainModule { }
