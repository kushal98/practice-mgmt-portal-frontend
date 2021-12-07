import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GetDoctorsService } from '../shared/get-doctors.service';

@Component({
  selector: 'app-doctor-finder',
  templateUrl: './doctor-finder.component.html',
  styleUrls: ['./doctor-finder.component.css']
})
export class DoctorFinderComponent implements OnInit {
  home:string;
  doctors:any;
  error:Number;
  errorMessage:string;

  constructor(public router: Router, private cookieService: CookieService, private docterService:GetDoctorsService) {
    this.error=0;
    this.errorMessage="";
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
    this.doctors = [];    
  }
  ngOnInit(): void {
    this.readDoctors();
  }

  readDoctors(): void {
    try{
      this.docterService.readAll().subscribe(
        response => {
          this.doctors = response.data;
        }, 
        error => {
          this.error = 1;
          this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
        }
      );
    }catch(err){
      this.doctors= [];
      this.error = 1;
      this.errorMessage = "Server is not able to be connected. Please Try again later ...";
    }
    
  }
}
