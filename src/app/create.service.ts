import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private _HttpClient:HttpClient) { }

  createMovie(name:string, description:string, imageUrl:any, category_id:any){
    const fd = new FormData();
    
    fd.append('name',name);
    fd.append('description' ,description );
    fd.append('image' ,imageUrl, imageUrl.name);
    fd.append('category_id' , category_id);
    return this._HttpClient.post('https://test-api.storexweb.com/api/movies', fd , {headers:new HttpHeaders() , observe: 'response'});
  }
}
