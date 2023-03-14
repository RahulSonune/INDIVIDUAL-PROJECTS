import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent {
  constructor(private api:DepartmentService){
    this.view()
  }
  displayedColumns: string[] = ['id', 'name','hod', 'no.','startDate','action',];
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
