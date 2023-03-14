import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacheredit',
  templateUrl: './teacheredit.component.html',
  styleUrls: ['./teacheredit.component.css']
})
export class TeachereditComponent {
  constructor(private api:TeacherService,private p:ActivatedRoute){
    p.params.subscribe((res)=>{
     this.paramm=res
    })
  
    this.getbyId()
  }


  teacherEdit=new FormGroup({
    teacherID:new FormControl(),
    name:new FormControl(),
    gender:new FormControl(),
    dob:new FormControl(),
    mobile:new FormControl(),
    joiningDate:new FormControl(),
    qualification:new FormControl(),
    exp:new FormControl(),
    username:new FormControl(),
    email:new FormControl(),
    pwd:new FormControl(),
    rpwd:new FormControl(),
    address:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    zcode:new FormControl(),
    country:new FormControl(),
    id:new FormControl()
      })



     
      
     
      paramm:any
      
      getbyId(){
        this.api.getbyId(this.paramm.id).subscribe((res:any)=>{
          this.teacherEdit.setValue(res)
        })
      }
      
      put(){
        this.api.put(this.paramm.id,this.teacherEdit.value).subscribe((res)=>{
          console.log(res)
      
        })
        this.teacherEdit.reset();
      }
      
}
