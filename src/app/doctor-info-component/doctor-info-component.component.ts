import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { GetDoctorsService } from '../shared/get-doctors.service';

@Component({
  selector: 'app-doctor-info-component',
  templateUrl: './doctor-info-component.component.html',
  styleUrls: ['./doctor-info-component.component.css']
})
export class DoctorInfoComponentComponent implements OnInit {
  doctor:any;
  error:Number;
  errorMessage:string;
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private doctorService:GetDoctorsService) {
    this.doctor={};
    this.error=0;
    this.errorMessage = "";
  }

  ngOnInit(): void {
    this.doctorService.read(this.cookieService.get('employeeId')).subscribe(
      response => {
        this.doctor = response.data;
        /*alert(JSON.stringify(response))*/
      }, 
      error => {
        this.error = 1;
        this.errorMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
      }
    );
  }

}
