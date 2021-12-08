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
  $:any;
  messages:any;
  temp:any;
  infoMessage:string
  error:Number;
  receiverId:Number;
  senderId:Number;

  constructor(public router: Router, private cookieService: CookieService, public route:ActivatedRoute, private messageService:MessagesService) { 
    //this.messages = {}
    this.$=$;
    this.infoMessage= "";
    this.error = 0;
    this.messages =  [];
    this.temp = []
    // Get PatientId and DoctorId from Cookies
    this.receiverId = Number(this.cookieService.get('patientId')); 
    this.senderId = Number(this.cookieService.get('employeeId'));
    //alert(this.receiverId+" "+this.senderId);
  }

  ngOnInit(): void {
    
    
    this.route.queryParamMap.subscribe(params =>{
      
      //Debugging ...
      //alert(JSON.stringify(this.cookieService.getAll()))
      //alert(Number(senderId) + " " + Number(receiverId));

      // Safely call and recall message API based on a interval
      this.safelyCallMessageAPI(this.senderId, this.receiverId);

      //this.fetchAllMessages(this.senderId, this.receiverId);
    })
      
  }

  /* Safely Call Messaging API without crashing the application */
  safelyCallMessageAPI(senderId:Number, receiverId:Number):void {
      try{
        this.unsafeFetchCalling(senderId, receiverId);
      }catch{
        clearInterval();
        setTimeout(this.safelyCallMessageAPI, 15000);
        this.infoMessage = "Error Connecting to the Server. Try hitting the refresh button to reconnect after sometime...";
        alert("crashed")
      }
    
  }

  /* Calls GET Messages from Messaging API team. This function can raise Errors if the Messaging API is not working or connected */
  unsafeFetchCalling(senderId:Number, receiverId:Number){
    setInterval(()=>this.fetchAllMessages(senderId,receiverId), 10000); // Performance Consideration
  }


  /* Used for Doctors to Get Messages from the Patient */
  fetchAllMessages(senderId:Number, receiverId:Number){  
    $.ajax({
      type: "GET",
      url: `${endpoint}/messages/${senderId}/${receiverId}`,
      beforeSend: (req:any)=>{
        //req.setRequestHeader('Origin',window.location.host);
        //req.setRequestHeader('Access-Control-Request-Method','GET');
      },
      data: {},
      success: (data:any)=>{
          this.messages = data.messages;
        //alert(JSON.stringify(this.messages));
      },
      error: (err:any)=>{
        this.error = 1;
        this.infoMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
        //alert(JSON.stringify(err));
      }
    })
    

    /* //Ignore this code as it does the same as above but a little Angular way
      this.messageService.readAll(senderId,receiverId).subscribe(
        async response => {
          this.messages = await response//.data;
          alert(JSON.stringify(this.messages));
        }, 
        error => {
          this.error = 1;
          this.infoMessage = "Response Format not supported. Data got Corrupted. Please Try again later ...";
          alert(JSON.stringify(error));
        }
      );
    */
    
  }



  /* Used for Doctors Send Messages to the Patient */
  sendMessage(senderId:Number,receiverId:Number, messageBody:string){
    //alert("Message is being sent");
    $.ajax({
      type: "POST",
      url: `${endpoint}/message/${senderId}/${receiverId}/${messageBody.split(' ').join('%20')}`,
      beforeSend: (req:any)=>{
        //req.setRequestHeader('Origin',window.location.host);
        //req.setRequestHeader('Access-Control-Request-Method','POST');
      },
      data: {},
      success: (data:any)=>{
        //alert("Message is sent");
        //alert(JSON.stringify(data)); 
        this.messages = this.fetchAllMessages(senderId, receiverId);
      },
      error: (err:any)=>{
        //alert("Your loss  "+`${endpoint}/message/${senderId}/${receiverId}/${messageBody.split(' ').join('%20')}`);
        this.error = 1;
        this.infoMessage = "There is some Technical Issue. Please Try again later ...";
        //alert(JSON.stringify(err))
      }
    });
  }

} 