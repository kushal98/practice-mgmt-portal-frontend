import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { commonServices } from '../shared/common.service';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.css']
})
export class MedicationsComponent implements OnInit {
  userAccess:Number;
  medRootRoute:string;
  //labReportRootLink:string;
  constructor(public router: Router, private route:ActivatedRoute, private cookieService: CookieService) {
    this.userAccess=4; /* by default give the access level to lowest policy */
    this.medRootRoute="/not-found";
  }

  ngOnInit(): void {
    const pathname = window.location.pathname;
    this.userAccess = new commonServices.UserAuthentication().userCheck(pathname);

    /* Determining Access Route */
    this.medRootRoute = (this.userAccess===1)?'/doctor/patient-records/medications':(
      (this.userAccess===2)?'/manager/patient-records/medications':(
        (this.userAccess===3)?'/nurse/patient-records/medications':"/not-found"
      )
    );
  }
}
