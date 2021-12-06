import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { commonServices } from '../shared/common.service';

export interface TabItem {
  label: string;
  route: string;
  index: Number;
}

@Component({
  selector: 'app-patient-records',
  templateUrl: './patient-records.component.html',
  styleUrls: ['./patient-records.component.css']
})
export class PatientRecordsComponent implements OnInit {

  tabs:TabItem[];


  constructor(public router: Router, private cookieService: CookieService) { 
    const pathname = window.location.pathname;

    const userTest = new commonServices.UserAuthentication().userCheck(pathname);
    
    if(userTest===2 || userTest===3){
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
    }else if(userTest==1){
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
          label: 'Documents',
          route: 'progressnotes',
          index: 6
        },
        {
          label: 'Messages',
          route: 'messages',
          index: 5
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
      ];
    }else{
      this.tabs = []
    }
  }

  ngOnInit(): void {
  }

}
