import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { commonServices } from '../shared/common.service';

@Component({
  selector: 'app-lab-reports',
  templateUrl: './lab-reports.component.html',
  styleUrls: ['./lab-reports.component.css']
})
export class LabReportsComponent implements OnInit {

  userAccess:Number;
  labRootRoute:string;
  //labReportRootLink:string;
  constructor(public router: Router, private route:ActivatedRoute, private cookieService: CookieService) {
    this.userAccess=4; /* by default give the access level to lowest policy */
    this.labRootRoute="/not-found";
  }

  ngOnInit(): void {
    const pathname = window.location.pathname;
    this.userAccess = new commonServices.UserAuthentication().userCheck(pathname);

    /* Determining Access Route */
    this.labRootRoute = (this.userAccess===1)?'/doctor/patient-records/labs':(
      (this.userAccess===2)?'/practice-manager/patient-records/labs':(
        (this.userAccess===3)?'/nurse/patient-records/labs':"/not-found"
      )
    );
  }

}
