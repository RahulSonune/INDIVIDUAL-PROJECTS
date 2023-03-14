import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacheraddComponent } from './teacheradd/teacheradd.component';
import { TeachereditComponent } from './teacheredit/teacheredit.component';
import { TeacherviewComponent } from './teacherview/teacherview.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeachersComponent,
    TeacherlistComponent,
    TeacheraddComponent,
    TeachereditComponent,
    TeacherviewComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TeachersModule { }
