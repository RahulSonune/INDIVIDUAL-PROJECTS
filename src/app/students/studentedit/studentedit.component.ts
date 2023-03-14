import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent {
  constructor(private api:StudentService,private p:ActivatedRoute){
    p.params.subscribe((res)=>{
     this.paramm=res
    })
  
    this.getbyId()
  }
 
  studentEdit=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    stuID:new FormControl(),
    gender:new FormControl(),
    dob:new FormControl(),
    class:new FormControl(),
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

 


  
     
      
     
      paramm:any
      
      getbyId(){
        this.api.getbyId(this.paramm.id).subscribe((res:any)=>{
          this.studentEdit.setValue(res)
        })
      }
      
      edit(){
        this.api.put(this.paramm.id,this.studentEdit.value).subscribe((res)=>{
          console.log(res)
      
        })
        this.studentEdit.reset();
      }

}
