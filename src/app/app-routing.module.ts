import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path:'',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }, { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) }, { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule) }, { path: 'subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) }, { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
