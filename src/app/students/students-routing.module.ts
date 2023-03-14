import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

import { StudentviewComponent } from './studentview/studentview.component';

const routes: Routes = [
  {path:'studentadd',component:StudentaddComponent },
  {path:'studentedit',component:StudenteditComponent},
  {path:'studentedit/:id',component:StudenteditComponent},
  {path:'studentlist',component:StudentlistComponent },
  {path:'studentview',component:StudentviewComponent },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
