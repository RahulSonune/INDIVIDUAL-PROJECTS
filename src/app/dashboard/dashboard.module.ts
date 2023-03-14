import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { CalendareventComponent } from './calendarevent/calendarevent.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    CalendareventComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
