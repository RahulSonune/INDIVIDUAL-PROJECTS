import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [

  {
    path:'student-dash',component:StudentDashboardComponent,
    // canActivate:[AdminGuard,StudentGuard,TeacherGuard]
  },
  {
    path:'teacher-dash',component:TeacherDashboardComponent,
    // canActivate:[AdminGuard,TeacherGuard]
  },
  {
    path:'',component:AdminDashboardComponent,
    // canActivate:[AdminGuard]
  },
  {
    path:'admin-dash',component:AdminDashboardComponent,
    // canActivate:[AdminGuard]
  },
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
