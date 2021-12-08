import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GetPatientsService } from '../shared/get-patients.service';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {
  patient:any;
  error:Number;
  errorMessage:string;
  blueButtonData:any;
  blueButtonKeys:any;
  constructor(public router: Router, private cookieService: CookieService, private patientService:GetPatientsService) {
    this.patient = {};
    this.error = 0;
    this.errorMessage="";
    this.blueButtonKeys= []
    this.blueButtonData = {}
  }

  ngOnInit(): void {
    this.readDemographics();
  }

  readDemographics(): void {
    try{
      if(this.cookieService.get('isPatientStored')){
        this.patientService.readDemographics(this.cookieService.get('patientId')).subscribe(
          response => {
            this.patient = response.patient;
            this.patientService.read(this.cookieService.get('patientId')).subscribe(
              response => {    
                this.patient = Object.assign(this.patient, response.patient);

                this.patientService.readHealthHistory(this.cookieService.get('patientId')).subscribe(
                  response => {
                    
                    this.patient = Object.assign(this.patient, response.patient);
                    
                  }, 
                  error => {
                    this.error = 1;
                    this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
                  }
                );
                
              }, 
              error => {
                this.error = 1;
                this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
              }
            );
          }, 
          error => {
            this.error = 1;
            this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
          }
        );

        this.patientService.readBlueButton(this.cookieService.get('patientId')).subscribe(
          response => {
            if(response.patient){
              
              this.blueButtonData = response.patient[0];
              this.blueButtonKeys= Object.keys(response.patient[0]);
              //alert(JSON.stringify(this.blueButtonData))
            }
          }, 
          error => {
            this.error = 1;
            this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
          }
        );
        
        
      }
      
    }catch(err){
      this.patient= [];
      this.error = 1;
      this.errorMessage = "Server is not able to be connected. Please Try again later ...";
    }
    
  }

}
