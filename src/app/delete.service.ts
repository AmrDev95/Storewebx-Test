import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private _HttpClient:HttpClient) { }

  deleteMovie(movieId:number):Observable<any>{
    return this._HttpClient.post(`https://test-api.storexweb.com/api/movies/${movieId}` , {_method: 'delete'});
  }
}
