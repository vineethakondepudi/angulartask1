import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart, registerables } from 'node_modules/chart.js'
import { HttpClient } from '@angular/common/http';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
 constructor(public chart:ChartService){}
  data: any;
  output:any;
  chartdata:any;
  

// renderChart(){
  // this.data=  {
  //   datasets: [{
  //     label: 'First Dataset',
  //     data: [{
  //       x: 20,
  //       y: 30,
  //       r: 15
  //     }, {
  //       x: 40,
  //       y: 10,
  //       r: 10
  //     }],
  //     backgroundColor: 'rgb(255, 99, 132)'
  //   }]
  // };
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// }


  ngOnInit() {
    // this.renderChart();
    // this.http.get("https://92bea528-ccb3-417d-af0f-5775fe0bfa6f.mock.pstmn.io").subscribe(result=>{
      this.chart.chartGet().subscribe(result=>{
      this.chartdata = result;
      this.output=this.chartdata.barChartVertical;
      // console.log(this.output)
      
    })
  } 
}