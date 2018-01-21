import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaysMonthComponent } from './displays-month/displays-month.component';


const routes: Routes = [
  { path: 'workmonths', component: DisplaysMonthComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
