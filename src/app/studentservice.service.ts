import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  [x: string]: any;
  editproduct(name: string) {
    throw new Error('Method not implemented.');
  }
  deleteproduct(name: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }
getstudent(){
  let url="https://e1e913cb-9efb-49e3-abed-f0672ef68363.mock.pstmn.io";
  return this.http.get(url)
  .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse)
  {
   return throwError(error.message || "unknow server page")
  }



}
// Onenroll(){
//   alert("Thank you for enrolling to student1")
// }
  
