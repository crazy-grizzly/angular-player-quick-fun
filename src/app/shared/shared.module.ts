import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadersCssModule } from 'angular2-loaders-css';

import { ImageComponent } from './components/image/image.component';
import { PlayerComponent } from './components/player/player.component';
import { HoursMinutesSecondsPipe } from './pipes/hours-minutes-seconds.pipe';

const COMPONENTS = [
  ImageComponent,
  PlayerComponent
];

const PIPES = [
  HoursMinutesSecondsPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    LoadersCssModule
  ]
})
export class SharedModule { }
