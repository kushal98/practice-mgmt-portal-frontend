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

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'Weigth', cols: 2, rows: 2, color: '#dee2e6'},
    {text: 'BMI', cols: 2, rows: 2, color: '#dee2e6'},
    {text: 'Blood Pressure', cols: 4, rows: 2, color: '#dee2e6'},
    {text: 'Smoking', cols: 4, rows: 2, color: '#dee2e6'},
  ];

}
