import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface TabItem {
  label: string;
  route: string;
  index: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'practice-management-portal';
  activeLinkIndex:Number;
  tabs:TabItem[];

  constructor(public router: Router) {
    this.tabs=this.tabs=[
      {
        label: 'Chartings',
        route: 'chartings',
        index: 1
      },
      {
        label: 'Demographics',
        route: 'demographics',
        index: 2
      },
      {
        label: 'Messages',
        route: 'messages',
        index: 3
      },
      {
        label: 'Documents',
        route: 'progressnotes',
        index: 4
      },
      {
        label: 'Labs',
        route: 'labs',
        index: 5
      },
      {
        label: 'Medications',
        route: 'medications',
        index: 6
      },
    ];
    this.activeLinkIndex = 0;
  }
}

