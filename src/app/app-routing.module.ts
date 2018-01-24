import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaysMonthComponent } from './displays-month/displays-month.component';
import {DisplaysDaysComponent} from "./displays-days/displays-days.component";
import {DisplaysTasksComponent} from "./displays-tasks/displays-tasks.component";


const routes: Routes = [
  { path: 'workmonths', component: DisplaysMonthComponent },
  { path: 'workdays', component: DisplaysDaysComponent },
  { path: 'tasks', component: DisplaysTasksComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
