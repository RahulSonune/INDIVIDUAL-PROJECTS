import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacheradd',
  templateUrl: './teacheradd.component.html',
  styleUrls: ['./teacheradd.component.css']
})
export class TeacheraddComponent {
constructor(private api:TeacherService){}


  teacherAdd=new FormGroup({
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

  })

  

  add(){
    this.api.add(this.teacherAdd.value).subscribe((res)=>{
      console.log(res)
    
    })
    this.teacherAdd.reset();
    }
}
