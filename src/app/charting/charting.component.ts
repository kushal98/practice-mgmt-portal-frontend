import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GetPatientsService } from '../shared/get-patients.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent implements OnInit {
  patient:any;
  error:Number;
  errorMessage:string;
  blueButtonData:any;
  blueButtonKeys:any;
  imagePath:string;
  constructor(public router: Router, private cookieService: CookieService, private patientService:GetPatientsService) { 
    this.imagePath = "/assets/img/humanBody.png";
    this.patient = {};
    this.error = 0;
    this.errorMessage="";
    this.blueButtonKeys= []
    this.blueButtonData = {}
  }

  ngOnInit(): void {
    this.readInsurance();
  }

  tiles: Tile[] = [
    {text: 'BMI', cols: 4, rows: 2, color: '#dee2e6'},
    {text: 'Blood Pressure', cols: 4, rows: 2, color: '#dee2e6'},
    {text: 'Systolic', cols: 2, rows: 1, color: '#dee2e6'},
    {text: 'Diastolic', cols: 2, rows: 1, color: '#dee2e6'},
    {text: 'Smoking', cols: 4, rows: 2, color: '#dee2e6'},
  ];


  readInsurance(): void {
    try{
      if(this.cookieService.get('isPatientStored')){
        this.patientService.readInsurance(this.cookieService.get('patientId')).subscribe(
          (response:any) => {
            this.patient = response.patient;
            this.patientService.read(this.cookieService.get('patientId')).subscribe(
              (response:any) => {    
                this.patient = Object.assign(this.patient, response.patient);
                this.patientService.readBlueButton(this.cookieService.get('patientId')).subscribe(
                  (response:any) => {
                    if(response.patient){
                      this.blueButtonData = response.patient[0];
                      this.blueButtonKeys= Object.keys(response.patient[0]);
                      
                      if(true/*this.blueButtonData['blue_button_approval']*/){
                        this.patient = Object.assign(this.patient, this.blueButtonData)
                      }
                      //alert(JSON.stringify(this.patient))
                    }
                  }, 
                  (error:any) => {
                    this.error = 1;
                    this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
                  }
                );
              }, 
              (error:any) => {
                this.error = 1;
                this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
              }
            );
          }, 
          (error:any) => {
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
