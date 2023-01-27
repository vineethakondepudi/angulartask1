import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getDate(){
    let url="https://87d45c1b-6642-4aa8-9de5-2f095e168516.mock.pstmn.io";
    return this.http.get(url)
  }
}
