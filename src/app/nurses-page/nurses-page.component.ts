import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-nurses-page',
  templateUrl: './nurses-page.component.html',
  styleUrls: ['./nurses-page.component.css']
})
export class NursesPageComponent implements OnInit {
  

  constructor(public router: Router, private cookieService: CookieService) {
    
  }

  ngOnInit(): void {
    
  }

}
