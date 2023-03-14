import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentlistComponent,
    StudentviewComponent,
    StudentaddComponent,
    StudenteditComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class StudentsModule { }
