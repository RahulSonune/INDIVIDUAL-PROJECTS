import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { SubjectaddComponent } from './subjectadd/subjectadd.component';
import { SubjecteditComponent } from './subjectedit/subjectedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SubjectsComponent,
    SubjectlistComponent,
    SubjectaddComponent,
    SubjecteditComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SubjectsModule { }
