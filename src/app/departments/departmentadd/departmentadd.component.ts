import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.css']
})
export class DepartmentaddComponent {
constructor(private api:DepartmentService){}

  departmentAdd=new FormGroup({
    departmentID:new FormControl(),
    departmentName:new FormControl(),
    startDate:new FormControl(),
    noStudent:new FormControl(),
    hod:new FormControl()
  })


  add(){
    this.api.add(this.departmentAdd.value).subscribe((res)=>{
      console.log(res)
    
    })
    this.departmentAdd.reset();
    }
}
