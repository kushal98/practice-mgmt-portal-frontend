import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoint:string = 'http://clinicmanagement-dev.us-east-2.elasticbeanstalk.com/api/GetAppointmentsByPatientId';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {
  constructor(private httpClient: HttpClient) { }

  read(patientId:Number): Observable<any> {
    return this.httpClient.get<any>(`${endpoint}?id=${patientId}`,{});
  }
}
