import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
{path:'users',component:UsersComponent},{path:'dashboard',component:DashboardComponent},
{path:'dusers',component:UserDetailsComponent},{path:'dtasks',component:TaskDetailsComponent},
{path:'dsummary',component:SummaryComponent},
{path:"tasks",component:TasksComponent},
{path:"verification",component:VerificationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
