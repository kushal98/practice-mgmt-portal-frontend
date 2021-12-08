import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { commonServices } from '../shared/common.service';

export interface TabItem {
  label: string;
  route: string;
  index: Number;
}

declare var $:any;

@Component({
  selector: 'app-patient-records',
  templateUrl: './patient-records.component.html',
  styleUrls: ['./patient-records.component.css']
})
export class PatientRecordsComponent implements OnInit {

  tabs:TabItem[];
  userTest:Number;

  constructor(public router: Router, private cookieService: CookieService, public route:ActivatedRoute) { 
    const pathname = window.location.pathname;

    this.userTest = new commonServices.UserAuthentication().userCheck(pathname);
    
    if(this.userTest===2 || this.userTest==3){
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
    }else if(this.userTest==1){
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
    this.route.queryParamMap.subscribe(params =>{

      // Check if PatientId is in Query string, that is user selected a patient
      if(params.get('patientId')){
        this.cookieService.put('patientId', this.route.snapshot.queryParams['patientId']);
        this.cookieService.put('isPatientStored', 'true');
        window.location.href = '/'+(
          (this.userTest===1)?'doctor':((this.userTest===2)?'manager':((this.userTest===3)?'nurse':4))
        )+'/patient-records'
      }else if(this.cookieService.get("isPatientStored")=="true") { // User entered url manually without providing a patientId, show Last view patient
        //do nothing as the page cookie has patientId
      }else{ //error page
        window.location.href="/not-found";
      }
      
    });
  }

}
