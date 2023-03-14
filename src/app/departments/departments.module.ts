import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentaddComponent } from './departmentadd/departmentadd.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmenteditComponent } from './departmentedit/departmentedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentaddComponent,
    DepartmentlistComponent,
    DepartmenteditComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    ReactiveFormsModule,
    MaterialModule

  ]
})
export class DepartmentsModule { }
