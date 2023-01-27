import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  postmethod(data: { sid: any; sname: any; department: any; phonenumber: any; }) {
    throw new Error('Method not implemented.');
  }
   urlget='http://172.17.10.41:8000/getdata';
   urlpost='http://172.17.10.41:8000/postdata';

  constructor(private http:HttpClient) { }

  getAllStudents(){
   return this.http.get(this.urlget)
  }

  saveStudentData(data:any){
    return this.http.post(this.urlpost,data)
  }
  
  deleteStudent(data:any){
    let deletem='http://172.17.10.41:8000/delete/'+data;
    return this.http.delete(deletem,data)
  }
  
updateStudent(data:any){
let putm=' http://172.17.10.41:8000/putdata/';
return this.http.put(putm,data)
}
behav= new BehaviorSubject<any>('')


getToken(){
  localStorage.getItem('token')
}




}

