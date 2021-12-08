import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { MessagesService } from '../shared/messages.service';

const endpoint:string="https://cs673-group8.herokuapp.com";

declare var $: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:any;
  infoMessage:string
  error:Number;

  constructor(public router: Router, private cookieService: CookieService, public route:ActivatedRoute, private messageService:MessagesService) { 
    this.messages = {}
    this.infoMessage= "";
    this.error = 0;
  }

  ngOnInit(): void {
    
    let receiverId:string;
    let senderId:string;
    this.route.queryParamMap.subscribe(params =>{

      // Get PatientId and DoctorId from Cookies
      receiverId = this.cookieService.get('patientId'); 
      senderId = this.cookieService.get('employeeId');
      
      //Debugging ...
      //alert(JSON.stringify(this.cookieService.getAll()))
      alert(Number(senderId) + " " + Number(receiverId));

      // Safely call and recall message API based on a interval
      //this.safelyCallMessageAPI(Number(senderId), Number(receiverId));

      this.fetchAllMessages(1,2)//Number(senderId), Number(receiverId));
    })
      
  }

  /* Safely Call Messaging API without crashing the application */
  safelyCallMessageAPI(senderId:Number, receiverId:Number):void {
    /*
    try{
      this.unsafeFetchCalling(senderId, receiverId);
    }catch{
      clearInterval();
      setTimeout(this.safelyCallMessageAPI, 15000);
      this.infoMessage = "Error Connecting to the Server. Try hitting the refresh button to reconnect after sometime...";
    }*/
    
  }

  /* Calls GET Messages from Messaging API team. This function can raise Errors if the Messaging API is not working or connected */
  unsafeFetchCalling(senderId:Number, receiverId:Number){
    setInterval(this.fetchAllMessages, 5000); // Performance Consideration
  }
  

  fetchAllMessages(senderId:Number, receiverId:Number){
    /*this.messageService.readAll(senderId,receiverId).subscribe(
      async response => {
        this.messages = await response//.data;
        alert(JSON.stringify(this.messages));
      }, 
      error => {
        this.error = 1;
        this.infoMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
        alert(JSON.stringify(error));
      }
    );*/
    $.ajax({
      type: "POST",
      url: 'https://cs673-group8.herokuapp.com/messages/1/2',
      data: {},
      success: (data:any)=>{alert(data)}
    })
  }

}

/*

  

*/