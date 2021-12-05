import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

interface TabItem {
  label: string;
  route: string;
  index: Number;
}

@Component({
  selector: 'app-patient-finder',
  templateUrl: './patient-finder.component.html',
  styleUrls: ['./patient-finder.component.css']
})
export class PatientFinderComponent implements OnInit {
  tabs:TabItem[];

  constructor(public router: Router, private cookieService: CookieService) {

    const pathname = window.location.pathname;
    const doctorCheck = /^\/doctor\/.*|$&/.test(pathname);
    const managerCheck = /^\/practice-management\/.*|$&/.test(pathname);
    const nurseCheck = /^\/nurse\/.*|$&/.test(pathname);
    console.log(doctorCheck);

    if(managerCheck || nurseCheck){
      this.tabs = [
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
          label: 'Labs',
          route: 'labs',
          index: 3
        },
        {
          label: 'Medications',
          route: 'medications',
          index: 4
        }
      ]
    }else if(doctorCheck){
      this.tabs=[
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
          label: 'Labs',
          route: 'labs',
          index: 3
        },
        {
          label: 'Medications',
          route: 'medications',
          index: 4
        },
        {
          label: 'Messages',
          route: 'messages',
          index: 5
        },
        {
          label: 'Documents',
          route: 'progressnotes',
          index: 6
        }
      ];
    }else{
      this.tabs = []
    }
    
  }
  ngOnInit(): void {
  }

}
