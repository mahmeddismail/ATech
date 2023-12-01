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
copied:boolean=false;
  copyToClipboard(text: string): void {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    this.copied=true;
    setTimeout(() => {
    this.copied=false;
      
    }, 1500);
    
  }

}
