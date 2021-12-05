import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { CrudServiceRuby, Medication, ResponseFormat } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class MedicationCrudServiceRuby extends CrudServiceRuby{
  constructor(private httpClient: HttpClient){
    super()
  }

  getMedications(): Observable<ResponseFormat> {
    return this.httpClient.get<ResponseFormat>(this.endpoint + '/medications', this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getMedication(medicationId:string, doctorId:string, patientId:string): Observable<ResponseFormat> {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    let httpParams = new HttpParams().set('medicationId', medicationId).set('doctorId', doctorId).set('patientId', patientId);
    console.log(httpParams.toString());
    console.log(httpHeaders.keys());
    return this.httpClient.get<ResponseFormat>(this.endpoint + '/medication', {
      headers: httpHeaders,
      params: httpParams, 
      responseType: 'json'
    }).pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  addMedication(data:Medication): Observable<ResponseFormat> {
    return this.httpClient.post<ResponseFormat>(this.endpoint + '/medication', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateMedication(data:Medication): Observable<ResponseFormat> {
    return this.httpClient.put<ResponseFormat>(this.endpoint + '/medication', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteMedication(medicationId:string, patientId:string, doctorId:string){
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    let httpParams = new HttpParams().set('medicationId', medicationId).set('doctorId', doctorId).set('patientId', patientId);
    return this.httpClient.delete<ResponseFormat>(this.endpoint + '/medication', {
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