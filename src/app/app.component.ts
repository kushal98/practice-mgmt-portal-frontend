import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'practice-management-portal';

  constructor(public router: Router, public route:ActivatedRoute, private cookieService: CookieService) {
    this.route.queryParamMap.subscribe(params =>{
      
      if(this.cookieService.get("isLogged")!=="true"){
        /* --- If the user is a doctor --- */
        if (params.get('doctorId') /*&&  Other Session details*/) {

          this.cookieService.put('employeeId', this.route.snapshot.queryParams['doctorId']);
          this.cookieService.put('employeeType', "doctor");
          this.cookieService.put("isLogged", "true");
          // Validate Session details (of this id from Patient Kiosk Database) and proceed to ...

          window.location.href = "/doctor";

        }
        /* --- If the user is a nurse --- */
        else if(params.get('nurseId') /*&&  Other Session details*/){

          this.cookieService.put('employeeId', this.route.snapshot.queryParams['nurseId']);
          this.cookieService.put('employeeType', "nurse");
          this.cookieService.put("isLogged", "true");
          // Validate Session details (of this id from Patient Kiosk Database) and proceed to ...

          window.location.href = "/nurse";
        }
        /* --- If the user is a practice manager --- */
        else if(params.get('managerId') /*&&  Other Session details*/){
          this.cookieService.put('employeeId', this.route.snapshot.queryParams['managerId']);
          this.cookieService.put('employeeType', "manager");
          this.cookieService.put("isLogged", "true");
          // Validate Session details and proceed to ...

          window.location.href = "/manager";
        }else {
          window.location.href="/not-found";
        }

        // TODO: Based on employeeType check their Id is in the respective database (nurses, doctors OR practice_managers).
        // If id doesnot exist redirect to /not-found

      }else{

        // If user is logged in but accessing contents using other routes ... (Unauthorized contents are not-found) by default
        var rx = /^\/([a-z-]*)/g;
        var arr = window.location.pathname.match(rx);
        if(window.location.pathname!=="/not-found" && arr && arr[0].slice(1)!==this.cookieService.get('employeeType')){
          window.location.href="/not-found";
        }
        // else execute normally without errors
      }
    });
      
    
  }
  ngOnInit(): void { 
    var link = $("nav");
    var bottom = link.height()-20;
    $("main").offset({top: bottom});
  }
}

