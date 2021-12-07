import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { commonServices } from '../shared/common.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  home:string;
  constructor(public router: Router, private route:ActivatedRoute, private cookieService: CookieService) { 
    // Find Home for the user using cookie
    if(this.cookieService.get('isLogged')){
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
    
  }

}
