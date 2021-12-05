import {throwError } from 'rxjs';
import {HttpHeaders,HttpParams } from '@angular/common/http';


/* --- Request/Response Formats --- */
export interface LabReport {
  patientId : string;
  doctorId: string;
  labId: string;
  labworkName: string;
  labworkFilePath: string;
  patientReportFilePath: string;
  dueBy: Date;
  description: string;
}
export interface Medication {
  patientId : string;
  doctorId: string;
  medicationId: string;
  medicationName: string;
  Cycle: Number;
  When: Number;
  Timing: Number;
  description: string;
}
export interface ResponseFormat {
  status : Number;
  success: boolean;
  data: Object;
  message: string;
}

export abstract class CrudServiceRuby {
  endpoint = 'http://localhost:5000';

  constructor() { 

  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  processError(err:any) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }  
}
