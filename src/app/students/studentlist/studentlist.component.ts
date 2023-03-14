import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  constructor(private api:StudentService){
    this.view()
  }
  displayedColumns: string[] = ['id', 'name', 'class','dob','parentName','mobile','address','action'];
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
