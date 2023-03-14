import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departmentedit',
  templateUrl: './departmentedit.component.html',
  styleUrls: ['./departmentedit.component.css']
})
export class DepartmenteditComponent {
  constructor(private api:DepartmentService,private p:ActivatedRoute){
    p.params.subscribe((res)=>{
     this.paramm=res
    })
  
    this.getbyId()
  }
  
  departmentEdit=new FormGroup({
    departmentID:new FormControl(),
    departmentName:new FormControl(),
    startDate:new FormControl(),
    noStudent:new FormControl(),
    hod:new FormControl(),
    id:new FormControl()
  })

  
  
  paramm:any
  
  getbyId(){
    this.api.getbyId(this.paramm.id).subscribe((res:any)=>{
      this.departmentEdit.setValue(res)
    })
  }
  
  put(){
    this.api.put(this.paramm.id,this.departmentEdit.value).subscribe((res)=>{
      console.log(res)
  
    })
    this.departmentEdit.reset();
  }
  
}
