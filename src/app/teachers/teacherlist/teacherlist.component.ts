import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent {
  constructor(private api:TeacherService){
    this.view()
  }
  displayedColumns: string[] = ['id', 'name', 'gender','dob','mobile','joiningDate','qualification','exp','address','action'];
  dataSource:any
  subjectList:any
  
  view(){
    this.api.get().subscribe((res)=>{
      this.dataSource=res    
    })
  }
  
  delete(id:any){
  this.api.delete(id).subscribe((res)=>{
    console.log(res)
    this.view()
  })
  }
  
  edit(id:any){
   console.log(id)
  }
  
}
