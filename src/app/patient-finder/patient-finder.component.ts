import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GetPatientsService } from '../shared/get-patients.service';


@Component({
  selector: 'app-patient-finder',
  templateUrl: './patient-finder.component.html',
  styleUrls: ['./patient-finder.component.css']
})
export class PatientFinderComponent implements OnInit {
  home:string;
  patients:any;
  error:Number;
  errorMessage:string;

  constructor(public router: Router, private cookieService: CookieService, private patientService:GetPatientsService) {
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


    this.patients = []; // [CHANGE] Call the Patient's API to get all the patients data
    
  }
  ngOnInit(): void {
    this.readDoctors();
  }

  readDoctors(): void {
    try{
      this.patientService.readAll().subscribe(
        response => {
          this.patients = response.data;
        }, 
        error => {
          this.error = 1;
          this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
        }
      );
    }catch(err){
      this.patients= [];
      this.error = 1;
      this.errorMessage = "Server is not able to be connected. Please Try again later ...";
    }
    
  }

}
