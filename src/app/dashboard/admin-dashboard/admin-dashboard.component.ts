import { Component, OnInit } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faAward,faSchool,faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
student=faUserGraduate;
award=faAward
school=faSchool
revenue=faFileInvoiceDollar

ngOnInit()
  {
    var myChart = new Chart("ra", {
      type: 'bar',
      data: {
          labels: ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017'],
          datasets: [{
              label: 'Girls',
              data: [12, 19, 3, 5, 2, 3,45,34,12],
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 1
          },
          {
            label: 'Boys',
            data: [19, 12, 5, 3, 1, 6,23,54,21],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
  });

  



   }




   dataSource=
    [{
      id:"101",
      name:"Rahul",
      marks:"1232",
      percentage:'95%',
      year:'2015'

    },
    {
      id:"101",
      name:"Rahul",
      marks:"1232",
      percentage:'95%',
      year:'2016'

    },
    {
      id:"101",
      name:"Rahul",
      marks:"1232",
      percentage:'95%',
      year:'2017'

    },
    {
      id:"101",
      name:"Rahul",
      marks:"1232",
      percentage:'95%',
      year:'2018'

    },
    {
      id:"101",
      name:"Rahul",
      marks:"1232",
      percentage:'95%',
      year:'2019'

    }]
    displayedColumns=['id','name','marks','percentage','year']
   
}
