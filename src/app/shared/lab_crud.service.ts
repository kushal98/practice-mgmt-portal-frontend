import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { CrudServiceRuby, LabReport, ResponseFormat } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class LabReportCrudServiceRuby extends CrudServiceRuby{
  constructor(private httpClient: HttpClient){
    super()
  }

  getLabReports(): Observable<ResponseFormat> {
    return this.httpClient.get<ResponseFormat>(this.endpoint + '/labs')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getLabReport(labId:string, doctorId:string, patientId:string): Observable<ResponseFormat> {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    let httpParams = new HttpParams().set('labId', labId).set('doctorId', doctorId).set('patientId', patientId);
    console.log(httpParams.toString());
    console.log(httpHeaders.keys());
    return this.httpClient.get<ResponseFormat>(this.endpoint + '/lab', {
      headers: httpHeaders,
      params: httpParams, 
      responseType: 'json'
    }).pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  addLabReport(data:LabReport): Observable<ResponseFormat> {
    return this.httpClient.post<ResponseFormat>(this.endpoint + '/lab', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateLabReport(data:LabReport): Observable<ResponseFormat> {
    return this.httpClient.put<ResponseFormat>(this.endpoint + '/lab', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteLabReport(labId:string, patientId:string, doctorId:string){
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    let httpParams = new HttpParams().set('labId', labId).set('doctorId', doctorId).set('patientId', patientId);
    return this.httpClient.delete<ResponseFormat>(this.endpoint + '/lab', {
      headers: httpHeaders,
      params: httpParams, 
      responseType: 'json'
    })
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }
}