import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GetPatientsService } from '../shared/get-patients.service';
import { GetDoctorsService } from '../shared/get-doctors.service';

@Component({
  selector: 'app-pmp-navigation',
  templateUrl: './pmp-navigation.component.html',
  styleUrls: ['./pmp-navigation.component.css']
})
export class PmpNavigationComponent implements OnInit {
  home:string;
  redirectAddress:string;
  isLogged:string;
  user:any;
  error:Number;
  errorMessage:string;
  patientStored:any;
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private patientService:GetPatientsService, private doctorService:GetDoctorsService) { 
    
    this.redirectAddress = "/logout"; // [CHANGE]: Patient Kiosk Signin signup or Appointment Scheduling Home page
    this.isLogged = this.cookieService.get("isLogged");
    this.user = {}
    this.patientStored = "";
    this.error=1;
    this.errorMessage = "";
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


  readPatients(): void {
    //alert("came here...")
    let patientId = this.cookieService.get("patientId");
    if(patientId){
      try{
        this.patientService.read(patientId).subscribe(
          response => {
            this.user = response;
            //alert(JSON.stringify(response))
          }, 
          error => {
            this.error = 1;
            this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
          }
        );
      }catch(err){
        this.user= {};
        this.error = 1;
        this.errorMessage = "Server is not able to be connected. Please Try again later ...";
      }  
    }  
    
  }

  ngOnInit(): void {
    if(this.cookieService.get("isPatientStored"))
      this.readPatients()  

      //alert(this.cookieService.get('employeeId'));
    if(this.cookieService.get('employeeId')){

      try{
        if(this.home=="/doctor"){
          this.doctorService.read(this.cookieService.get('employeeId')).subscribe(
            response => {
              this.user = response.data;
              /*alert(JSON.stringify(response))*/
            }, 
            error => {
              this.error = 1;
              this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
            }
          );
        }else if(this.home=="/nurse"){
          this.doctorService.readNurse(this.cookieService.get('employeeId')).subscribe(
            response => {
              this.user = response.data;
              /*alert(JSON.stringify(response))*/
            }, 
            error => {
              this.error = 1;
              this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
            }
          );
        }else if(this.home=="/manager"){
          this.doctorService.readManager(this.cookieService.get('employeeId')).subscribe(
            response => {
              this.user = response.data;
              /*alert(JSON.stringify(response))*/
            }, 
            error => {
              this.error = 1;
              this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
            }
          );
        }
      }catch(err){
        this.user= {};
        this.error = 1;
        this.errorMessage = "Server is not able to be connected. Please Try again later ...";
      }  
    
    }
  }

  logOut(): void{
    this.cookieService.removeAll();
    window.location.href = "https://patient-login-main.herokuapp.com/"; // Patient Kiosk Homepage for Login/Signin
    // [CHANGE]: Redirect here or change redirectAddress above
  }


}
