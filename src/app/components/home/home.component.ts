import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js/auto';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {

  }


  lines: any = [1, 2, 3, 4]

}
// @ViewChild('myChart') myChart: ElementRef|undefined;
// ngOnInit(): void {

//   setTimeout(() => {
//     this.userChart()
//   }, 1500);

// }


// userChart(){
//   const ctx = this.myChart?.nativeElement.getContext('2d');

//   const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'اغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
//       datasets: [{
//         label: ' ',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: '#8A74F9',
//         tension: .4
//       }]
//     },
//     options: {
//       scales: {
//         x: {
//           display: true,
//         },
//         y: {
//           display: false  ,
//         }
//       },
//       plugins: {
//         legend: {
//           display: false,
//         }
//       },
//       responsive: true,
//       maintainAspectRatio: true,
//       elements: {
//         line: {
//           borderWidth: 2,
//           tension: 0.3, // Adjust the tension to make the line less smooth
//           borderColor: 'rgba(75, 192, 192, 0.7)', // Add transparency for a faded look
//         },
//         point: {
//           radius: 4,
//           borderWidth: 2,
//           backgroundColor: 'rgba(75, 192, 192, 0.7)',
//           borderColor: 'white', // Add a white border around points
//         },
//       },
//     }
//   });
// }

