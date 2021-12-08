import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


const endpoint = 'https://patient-kiosk.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class GetPatientsService {
  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<any> {
    return this.httpClient.get(endpoint + `/patientDetails`);
  }

  read(patientId:string): Observable<any> {
    return this.httpClient.get(`${endpoint}/intake/${patientId}/personalDetails`,{});
  }

  readDemographics(patientId:string): Observable<any>{
    return this.httpClient.get(`${endpoint}/intake/${patientId}/demographicDetails`,{});
  }

  readHealthHistory(patientId:string): Observable<any>{
    return this.httpClient.get(`${endpoint}/health_histories`,{});
  }

  readBlueButton(patientId:string): Observable<any>{
    return this.httpClient.get(`${endpoint}/intake/${patientId}/blueButton`,{});
    
  }

  
  readInsurance(patientId:string): Observable<any>{
    return this.httpClient.get(`${endpoint}/intake/${patientId}/insuranceDetails`,{});
  }
}
