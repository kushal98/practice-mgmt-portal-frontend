import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-pmp-navigation',
  templateUrl: './pmp-navigation.component.html',
  styleUrls: ['./pmp-navigation.component.css']
})
export class PmpNavigationComponent implements OnInit {
  home:string;
  redirectAddress:string;
  isLogged:string;
  constructor(private route: ActivatedRoute, private cookieService: CookieService) { 
    
    this.redirectAddress = "/logout"; // [CHANGE]: Patient Kiosk Signin signup or Appointment Scheduling Home page
    this.isLogged = this.cookieService.get("isLogged");

    // Find Home for the user using cookie
    if(this.isLogged){
      //alert(this.cookieService.get('employeeType'));
      if(this.cookieService.get('employeeType')==='doctor'){
        this.home = "/doctor"
      }else if(this.cookieService.get('employeeType')==='nurse'){
        this.home = "/nurse"
      }else if(this.cookieService.get('employeeType')==='manager'){
        this.home = "/manager"
      }else{
        this.home = "/";
      }
    }else{
      this.home = "/";
    }
  }

  ngOnInit(): void {

    // Call Patient Kiosk Users table to get Email by employeeId=>userId
    
  }

  logOut(): void{
    this.cookieService.removeAll();

    // [CHANGE]: Redirect here or change redirectAddress above
  }


}
