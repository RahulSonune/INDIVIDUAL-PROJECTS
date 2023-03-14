import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent {
constructor(private api:SubjectService){
  this.view()
}
displayedColumns: string[] = ['id', 'name', 'class','action'];
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
