import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTokenService {

  public Token: BehaviorSubject<boolean> = new BehaviorSubject<any>(localStorage.getItem('userToken'));

  constructor() { }
}
