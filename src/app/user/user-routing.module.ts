import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';

const routes: Routes = [
  {path:'view_quotes:/planId',component:ViewQuotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
