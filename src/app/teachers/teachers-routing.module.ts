import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacheraddComponent } from './teacheradd/teacheradd.component';
import { TeachereditComponent } from './teacheredit/teacheredit.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';

import { TeacherviewComponent } from './teacherview/teacherview.component';

const routes: Routes = [
  {path:'teacheradd',component:TeacheraddComponent},
  {path:'teacheredit/:id',component:TeachereditComponent},
  {path:'teacheredit',component:TeachereditComponent},
  {path:'teacherlist',component:TeacherlistComponent},
  {path:'teacherview',component:TeacherviewComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
