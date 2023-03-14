import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-calendarevent',
  templateUrl: './calendarevent.component.html',
  styleUrls: ['./calendarevent.component.css']
})
export class CalendareventComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data:any){
this.title=data
}

title:any
}
