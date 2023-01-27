import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
//   public url1="../assets/data/chart.json"
// chartGet()
// {
//   return this.http.get(this.url1)
// }



chartGet(){
  return this.http.get('https://92bea528-ccb3-417d-af0f-5775fe0bfa6f.mock.pstmn.io')
  // return this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
}
}
