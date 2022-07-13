import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor() { }
  

  isLoggedIn():boolean{
    if(localStorage.getItem('userToken')==null){
      return false;
    }

    else{
      return true;
    }
  }
}
