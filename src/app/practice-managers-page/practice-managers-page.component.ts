import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-practice-managers-page',
  templateUrl: './practice-managers-page.component.html',
  styleUrls: ['./practice-managers-page.component.css']
})
export class PracticeManagersPageComponent implements OnInit {

  constructor(public router: Router, private cookieService: CookieService) { 
  }

  ngOnInit(): void {
  }

}
