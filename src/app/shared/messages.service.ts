import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



const endpoint = 'https://cs673-group8.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private httpClient: HttpClient) { }

  readAll(senderId:Number,receiverId:Number): Observable<any> {
    alert(endpoint + '/messages/1/2');
    return this.httpClient.put<any>(endpoint + '/messages/1/2/messageTextSendingTest1', {});
  }

}
