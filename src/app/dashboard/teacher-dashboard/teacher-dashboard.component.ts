import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate,faBook,faClock } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js/auto';
import { CalendarOptions} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendareventComponent } from '../calendarevent/calendarevent.component';
// import { CalendareventComponent } from '../calendarevent/calendarevent.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit{
constructor(public dialog:MatDialog){}


  blackboard=faBlackboard;
  student=faUserGraduate;
  book=faBook;
  clock=faClock

 
ngOnInit(){
  new Chart("semesterProgress",{
    type: 'doughnut',
    data:  {
      labels: [
       'Completed'
      ],
      datasets: [{
        
        data: [50,50],
        backgroundColor: [
          'rgb(111,106,250)',
          'rgb(229,228,228)',
          
        ],
        hoverOffset: 4
      }]
    }
  });
}

eventTitle:any;

handleDateClick(arg:any) {
  // alert('date click! ' + arg)
  console.log(arg.event._def.title)
  this.eventTitle=arg.event._def.title
  this.openDialog()
}

calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  eventClick: this.handleDateClick.bind(this),
  plugins: [dayGridPlugin],
  events: [
    { title: 'Sports Day', date: '2023-03-01' },
    { title: 'Weekly Test', date: '2023-03-25' }
  ]
};

openDialog(){
  this.dialog.open(CalendareventComponent,{
    width:'500px',
    data:this.eventTitle
  })
}

}





