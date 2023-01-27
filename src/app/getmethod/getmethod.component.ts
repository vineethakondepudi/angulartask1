import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-getmethod',
  templateUrl: './getmethod.component.html',
  styleUrls: ['./getmethod.component.css']
})
export class GetmethodComponent implements OnInit {
  result:any;
res: any;
Sid: any;
Sname: any;
department: any;
phonenumber: any;
 constructor(private student:StudentsService){}
 ngOnInit() {
 
  this.student.getAllStudents().subscribe(data=>{
    this.result=data;
    console.log(JSON.stringify(this.result));
    
  })
 }

  
}
