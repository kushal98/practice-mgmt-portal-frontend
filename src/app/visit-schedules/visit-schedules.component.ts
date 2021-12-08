import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { VisitsService } from '../shared/visits.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return Object.keys(value).map(key => value[key]);
  }
}

export interface Visit{
  patientId: Number,
  doctorId: Number,
  date: Date,
  day: string;
  reason: string;
}

declare var $: any;
@Component({
  selector: 'app-visit-schedules',
  templateUrl: './visit-schedules.component.html',
  styleUrls: ['./visit-schedules.component.css']
})
export class VisitSchedulesComponent extends ValuesPipe implements OnInit {
  visits:Array<Array<Visit>>;
  error:Number;
  infoMessage:string;
  constructor(public router: Router, private cookieService: CookieService, public route:ActivatedRoute, public visitService:VisitsService) { 
    super();
    this.visits=[]; this.error=0; this.infoMessage="";
  }

  ngOnInit(): void {
    // Get PatientId from cache
    if(this.cookieService.get('patientId')){
      this.getVisits(Number(this.cookieService.get('patientId')))
    }else{
      window.location.href='/not-found';
    }
    
  }

  getVisits(patientId:Number){
    
    $.ajax({
      type: "GET",
      url: `http://clinicmanagement-dev.us-east-2.elasticbeanstalk.com/api/GetAppointmentsByPatientId?id=${patientId}`,
      data: {},
      success: (visits:any)=>{
        //alert(JSON.stringify(data)); 
        //this.processVisitToDisplay(data);

        const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const NewVisits:any = Array(Array<Visit>());
        let j:any= 0;
        for(var i=0;i<visits.length;i++){
        
          if(i!=0 && i%4==0){
            NewVisits.push(new Array<Visit>());
            j++;
          }

          //alert(visits[i].startDateTime);
          NewVisits[j].push({
            patientId: (visits[i].patientId)?visits[i].patientId:"",
            doctorId: (visits[i].doctorId)?visits[i].doctorId:"",
            date: (visits[i].startDateTime)?visits[i].startDateTime:"",
            day: days[new Date((visits[i].startDateTime)?visits[i].startDateTime:0).getDay()],
            reason: (visits[i].detail)?visits[i].detail:""
          });
      
        }

        this.visits = this.transform(NewVisits,[]);
        this.infoMessage = "Your are all set!"//JSON.stringify(this.visits);
        
      },
      error: (err:any)=>{
        this.error=1;
        this.infoMessage = "Could not Connect to the Server or Not Found in the server. Please Try again later..."
      }      
    });
    this.refreshVisits();
  }

  refreshVisits(){
    $('#carousel-0').addClass('active');
  }

}
