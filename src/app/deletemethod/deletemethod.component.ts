import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-deletemethod',
  templateUrl: './deletemethod.component.html',
  styleUrls: ['./deletemethod.component.css']
})
export class DeletemethodComponent implements OnInit {
  http: any;

  result:any;
onStudents: any;
stu: any;
  constructor(private student:StudentsService){}
  ngOnInit() {
  


  //  this.student.deleteStudent(data).subscribe(data=>{
    //  this.result=data;
    //  console.log(JSON.stringify(this.result));
     
  //  })
}

deleteStudent(data1:any){
 this.student.deleteStudent(data1).subscribe((req)=>{
  console.log(req);
  
 })

}
  
edit(){

}
  
}