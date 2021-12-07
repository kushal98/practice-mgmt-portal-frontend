import { Injectable } from '@angular/core';

/* --- This is commonsServices class used by all modules --- */
export namespace commonServices{

  export class UserAuthentication{
    /**
      @function userCheck
      @param <string> pathname - the current browser path user is on
      @returns <Number> - policy level integer from {1:doctor_highest_policy_access, 2:manager_medium_policy_access, 3:nurse_highest_policy_access, 4: no_policy_or_access}
      @details Check the user and returns the policy level
     */
    public userCheck(pathname:string){
      const doctorCheck = /^\/doctor\/.*|$&/.test(pathname);
      const managerCheck = /^\/manager\/.*|$&/.test(pathname);
      const nurseCheck = /^\/nurse\/.*|$&/.test(pathname);
      return (doctorCheck)?1: ( (managerCheck)?2: ( (nurseCheck)?3:4 ) );
    }
  }

  // ... Include all other authentication here
  
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
}
