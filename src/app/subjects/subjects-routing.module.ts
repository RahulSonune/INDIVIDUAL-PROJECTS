import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectaddComponent } from './subjectadd/subjectadd.component';
import { SubjecteditComponent } from './subjectedit/subjectedit.component';
import { SubjectlistComponent } from './subjectlist/subjectlist.component';
import { SubjectsComponent } from './subjects.component';

const routes: Routes = [ {
  path:'', component:SubjectsComponent, 
  children:[
  {path:'subjectadd',component:SubjectaddComponent},
  {path:'subjectedit/:id',component:SubjecteditComponent},
  {path:'subjectedit',component:SubjecteditComponent},
  {path:'subjectlist',component:SubjectlistComponent},
]}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
