import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-doctor-finder',
  templateUrl: './doctor-finder.component.html',
  styleUrls: ['./doctor-finder.component.css']
})
export class DoctorFinderComponent implements OnInit {

  doctorData:any;
  home:string;

  constructor(public router: Router, private cookieService: CookieService) {

    // Find Home for the user using cookie
    if(this.cookieService.get('isLogged')){
      //alert(this.cookieService.get('employeeType'));
      if(this.cookieService.get('employeeType')==='doctor'){
        this.home = "/doctor"
      }else if(this.cookieService.get('employeeType')==='nurse'){
        this.home = "/nurse"
      }else if(this.cookieService.get('employeeType')==='manager'){
        this.home = "/practice-manager"
      }else{
        this.home = "/";
      }
    }else{
      this.home = "/";
    }


    this.doctorData = {}; // [TODO] Call the /doctor API here
    
  }
  ngOnInit(): void {
  }

}
