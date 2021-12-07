import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface ResponseFormat {
  status : Number;
  success: boolean;
  data: Object;
  message: string;
}

const endpoint = 'https://dry-ocean-01268.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class GetDoctorsService {
  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<ResponseFormat> {
    return this.httpClient.get<ResponseFormat>(endpoint + '/doctors');
  }

  read(doctorId:string): Observable<ResponseFormat> {
    return this.httpClient.get<ResponseFormat>(`${endpoint}/doctor`,{
      params:{
        doctorId: doctorId
      }
    });
  }
}
