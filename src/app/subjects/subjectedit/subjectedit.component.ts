import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjectedit',
  templateUrl: './subjectedit.component.html',
  styleUrls: ['./subjectedit.component.css']
})
export class SubjecteditComponent {
constructor(private api:SubjectService,private p:ActivatedRoute){
  p.params.subscribe((res)=>{
   this.paramm=res
  })

  this.getbyId()
}

subjectEdit=new FormGroup({
  subjectID:new FormControl(),
  subjectName:new FormControl(),
  class:new FormControl(),
  id:new FormControl(),

})

paramm:any

getbyId(){
  this.api.getbyId(this.paramm.id).subscribe((res:any)=>{
    this.subjectEdit.setValue(res)
  })
}

put(){
  this.api.put(this.paramm.id,this.subjectEdit.value).subscribe((res)=>{
    console.log(res)

  })
  this.subjectEdit.reset();
}

}
