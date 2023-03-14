import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentaddComponent } from './departmentadd/departmentadd.component';
import { DepartmenteditComponent } from './departmentedit/departmentedit.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [
  {    path:'departmentedit/:id',component:DepartmenteditComponent },
  {    path:'departmentedit',component:DepartmenteditComponent },
  {    path:'departmentadd',component:DepartmentaddComponent },
  {    path:'departmentlist',component:DepartmentlistComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
