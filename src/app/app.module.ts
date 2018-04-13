import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { MessageService } from './services/message.service';

import { CoreModule } from './core/core.module';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

import { PaneDirective } from './template-syntax/template-syntax.component';
import { DepartmentsModule } from './departments/departments.module';
import { AppRoutingModule } from './/app-routing.module';
import { PartsModule } from './parts/parts.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DepartmentsModule,
    PartsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    TemplateSyntaxComponent,
    PaneDirective
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
