import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './dashboard/menu/menu.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TasksComponent,
    UsersComponent,
    DashboardComponent,
    FooterComponent,
    MenuComponent,
    UserDetailsComponent,
    TaskDetailsComponent,
    SummaryComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
