import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  generateToken(){
    return this.http.post('https://localhost:7271/api/Token',{});
  }
  login(userInfo:any){
    return this.http.post('https://localhost:7271/api/Login',userInfo);
  }
}
