import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from '../parts/welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { C3Component } from '../c3/c3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
    C3Component,
  ],
  exports: [WelcomeComponent, PageNotFoundComponent]
})
export class PartsModule { }
