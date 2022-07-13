import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private _HttpClient:HttpClient) { }

  updateMovie(id:number ,name:string, description:string, imageUrl:any, category_id:any):Observable<any>{
    const fd = new FormData();
    
    fd.append('name',name);
    fd.append('description' ,description );
    fd.append('image' ,imageUrl, imageUrl.name);
    fd.append('category_id' , category_id);
    fd.append('_method', 'put');
    return this._HttpClient.post(`https://test-api.storexweb.com/api/movies/${id}`, fd , {headers:new HttpHeaders() , observe: 'response'});
  }
}


// {name:name ,description: description ,image:imageUrl, category_id:category_id , _method: 'put'}