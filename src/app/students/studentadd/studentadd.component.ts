import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent {
constructor(private api:StudentService){}

 
  studentAdd=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    stuID:new FormControl(),
    gender:new FormControl(),
    dob:new FormControl(),
    class:new FormControl(),
    img:new FormControl(),
    religion:new FormControl(),
    joiningDate:new FormControl(),
    mobile:new FormControl(),
    admissionNo:new FormControl(),
    section:new FormControl(),
    fatherName:new FormControl(),
    fatherOccupation:new FormControl(),
    fatherMobile:new FormControl(),
    fatherEmail:new FormControl(),
    motherName:new FormControl(),
    motherOccupation:new FormControl(),
    motherMobile:new FormControl(),
    motherEmail:new FormControl(),
    presentAdd:new FormControl(),
    permanentAdd:new FormControl(),
  })


  add(){
    this.api.add(this.studentAdd.value).subscribe((res)=>{
      console.log(res)
    
    })
    this.studentAdd.reset();
    }
}
