import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'practice-management-portal';
  

  constructor(public router: Router, public route:ActivatedRoute, private cookieService: CookieService) {

    this.route.queryParamMap.subscribe(params =>{
      /* --- If the user is a doctor --- */
      if (params.get('doctor-id') /*&&  Other Session details*/) {

        
        // Rahul's Note: TODO
        this.cookieService.put('employee-id', this.route.snapshot.queryParams['doctor-id']);
        this.cookieService.put('employee-type', this.route.snapshot.queryParams['doctor']);
        // Validate Session details (of this id from Patient Kiosk Database) and proceed to ...

        window.location.href = "/doctor";

      }
      /* --- If the user is a nurse --- */
      else if(params.get('nurse-id') /*&&  Other Session details*/){

        // Rahul's Note: TODO
        this.cookieService.put('employee-id', this.route.snapshot.queryParams['nurse-id']);
        this.cookieService.put('employee-type', this.route.snapshot.queryParams['nurse']);
        // Validate Session details (of this id from Patient Kiosk Database) and proceed to ...

        window.location.href = "/nurse";
      }
      /* --- If the user is a practice manager --- */
      else if(params.get('practice-manager-id') /*&&  Other Session details*/){

        // Rahul's Note: TODO
        this.cookieService.put('employee-id', this.route.snapshot.queryParams['practice-manager-id']);
        this.cookieService.put('employee-type', this.route.snapshot.queryParams['practice manager']);
        // Validate Session details and proceed to ...

        window.location.href = "/practice-manager";
      }
      
      
    });
    
  }
}

