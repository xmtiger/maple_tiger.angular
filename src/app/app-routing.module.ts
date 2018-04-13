import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './parts/welcome/welcome.component';
import { PageNotFoundComponent } from './parts/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
