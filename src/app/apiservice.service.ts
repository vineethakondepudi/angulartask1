import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  
  constructor(private http:HttpClient) { }
  getmethod(){
    let url="http://172.17.10.41:8000/getdata";
    return this.http.get(url)
  }
  deletemethod(data:any){
    let deletem='http://172.17.10.41:8000/delete/'+data;
    return this.http.delete(deletem,data)
  }
postmethod(data:any){
let postm='http://172.17.10.41:8000/postdata/';
return this.http.post(postm,data)
}
putmethod(data:any){
  let putm=' http://localhost:8000/putdata/';
  return this.http.put(putm,data)
}


// putmethod(){
//   const PutBody={ 
//     "sid":5731,
//     "sname":"hemaaaaaaaaaaaaaaaaa",
//     // "department":"Angularrrrrrrrrrrrrrrrrrrrrr",
    
//   }
//   return this.http.put('http://localhost:8000/putdata/sid/5732',PutBody)
// }

}

