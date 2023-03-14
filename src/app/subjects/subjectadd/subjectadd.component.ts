import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjectadd',
  templateUrl: './subjectadd.component.html',
  styleUrls: ['./subjectadd.component.css']
})
export class SubjectaddComponent {
constructor(private api:SubjectService){}

  subjectadd=new FormGroup({
    subjectID:new FormControl(),
    subjectName:new FormControl(),
    class:new FormControl(),

  })

  addSubject(){
    this.api.add(this.subjectadd.value).subscribe((res)=>{
      console.log(res)
    
    })
    this.subjectadd.reset();
    }
}
