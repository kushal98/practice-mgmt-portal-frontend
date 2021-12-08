import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent implements OnInit {

  imagePath:string;
  constructor() { 
    this.imagePath = "/assets/img/humanBody.png"
  }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'BMI : 26.36', cols: 4, rows: 2, color: '#dee2e6'},
    {text: 'Blood Pressure', cols: 4, rows: 2, color: '#dee2e6'},
    {text: 'Systolic: 120mmHg', cols: 2, rows: 1, color: '#dee2e6'},
    {text: 'Diastolic: 80mmHg', cols: 2, rows: 1, color: '#dee2e6'},
    {text: 'Smoking Status: None', cols: 4, rows: 2, color: '#dee2e6'},
  ];

}
