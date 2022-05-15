import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserapiService {
 
  baseUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.baseUrl);
  }
  viewData(id:string){
    return this.http.get(this.baseUrl + '/' + id);
  }
  sendData(userInp: any){
    return this.http.post(this.baseUrl + '/', userInp)
  }
  deleteUser(id: any){
    return this.http.delete(this.baseUrl + '/' + id)
  }
  editData(id: any, body: any){
    return this.http.put(this.baseUrl + '/' + id, body)
  }
}
