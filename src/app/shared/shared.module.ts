import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadersCssModule } from 'angular2-loaders-css';

import { ImageComponent } from './components/image/image.component';

const COMPONENTS = [
  ImageComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    LoadersCssModule
  ]
})
export class SharedModule { }
