import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';



@Component({
  selector: 'app-patient-finder',
  templateUrl: './patient-finder.component.html',
  styleUrls: ['./patient-finder.component.css']
})
export class PatientFinderComponent implements OnInit {
  

  constructor(public router: Router, private cookieService: CookieService) {

    
    
  }
  ngOnInit(): void {
  }

}
