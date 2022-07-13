import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private _HttpClient:HttpClient) { }

  displayMovies():Observable<any>{
    return this._HttpClient.get('https://test-api.storexweb.com/api/movies');
  }
}
