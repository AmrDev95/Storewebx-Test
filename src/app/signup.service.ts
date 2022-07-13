import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _HttpClient:HttpClient) { }

  signup(userName:string ='',userEmail:string ='', userPassword:string =''):Observable<any>{
    
    return this._HttpClient.post('https://test-api.storexweb.com/api/register', {name:userName ,email: userEmail , password:userPassword} , {headers:new HttpHeaders() , observe: 'response'});

  }
}
