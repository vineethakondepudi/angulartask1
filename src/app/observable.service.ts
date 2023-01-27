import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  


  behavSub=new BehaviorSubject<any>('');

  
  urlget='http://172.17.10.41:8000/getdata';
  urlpost='http://172.17.10.41:8000/postdata';

 constructor(private http:HttpClient) { }

 getAllStudents(){
  return this.http.get(this.urlget)
 }
 
 deleteStudent(data:any){
   let deletem='http://172.17.10.41:8000/delete/'+data;
   return this.http.delete(deletem,data)
 }

 updateStudent(data:any){
  let putm=' http://172.17.10.41:8000/putdata/';
  return this.http.put(putm,data)
  }
}
