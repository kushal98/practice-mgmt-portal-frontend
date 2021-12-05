import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-pmp-navigation',
  templateUrl: './pmp-navigation.component.html',
  styleUrls: ['./pmp-navigation.component.css']
})
export class PmpNavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit(): void {
    
  }


  /* API Todo:
    -  
   */

}
