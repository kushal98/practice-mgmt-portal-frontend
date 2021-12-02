import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Importing JQuery
declare var $: any;

@Component({
  selector: 'app-notes-voiceover',
  templateUrl: './notes-voiceover.component.html',
  styleUrls: ['./notes-voiceover.component.css']
})
export class NotesVoiceoverComponent implements OnInit {

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  audioChunks:any = [];
  audioElement:any;

  ngOnInit(): void {
    
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
    
      $('#vo-stop-btn').hide();
      $('#vo-play-btn').hide();
      $('#vo-pause-btn').hide();


      $('#vo-start-btn').on('click', ()=>{
        $('#vo-play-btn').hide();
        $('#vo-pause-btn').hide();
        console.log('started recording ...');
        this.audioChunks=[];
        mediaRecorder.start();
        $('#vo-start-btn').hide();
        $('#vo-stop-btn').show();
        $('#vo-info-text').text('Recording audio.').css({'color':'red'});
      });
      
      mediaRecorder.addEventListener("dataavailable", event => {
        this.audioChunks.push(event.data);
      });
  
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(this.audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log(audioUrl);
        this.audioElement = new Audio(audioUrl);
        this.audioElement.id       = 'audio-player';
        this.audioElement.controls = true;
        $('#vo-info-text').text('Saved at URL :'+ audioUrl).css({'color':'green'});
        $('#voiceover_notes').val(audioUrl);
        $('#vo-play-btn').show();
        $('#vo-pause-btn').show();
      });
      
      $('#vo-play-btn').on('click',()=>{
        if(!this.audioElement.paused){
          this.audioElement.currentTime=0; 
        }
        this.audioElement.play();
      });
      $('#vo-pause-btn').on('click',()=>{
        this.audioElement.pause();
      });
      
      $('#vo-stop-btn').on('click', ()=>{
        console.log('stopped recording ...');
        $('#vo-info-text').text('Generating audio ...').css({'color':'gray'});
        setTimeout(() => {
          mediaRecorder.stop();
          $('#vo-stop-btn').hide();
          $('#vo-start-btn').show();
        }, 3000);
      });

    });
    
  }

}




/*
Base Template for Using JQuery in HTML module: for future use

import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Importing JQuery
declare var $: any;

@Component({
  selector: 'app-notes-voiceover',
  templateUrl: './notes-voiceover.component.html',
  styleUrls: ['./notes-voiceover.component.css']
})
export class NotesVoiceoverComponent implements OnInit {

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    
  }

}
*/