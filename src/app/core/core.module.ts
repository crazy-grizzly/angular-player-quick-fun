import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  MainLayoutComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: [
    COMPONENTS,
  ],
  imports: [
    // Notice: Importing `RouterModule` is required to bring MainLayoutComponent to work because of `router-outlet` usage
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class CoreModule { }
