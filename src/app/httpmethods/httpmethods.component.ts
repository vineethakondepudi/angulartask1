import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { StudentsService } from '../students.service';

@Component({
  selector: 'app-httpmethods',
  templateUrl: './httpmethods.component.html',
  styleUrls: ['./httpmethods.component.css']
})
export class HttpmethodsComponent {
item: any;
  constructor(private student:StudentsService,private router:Router){}
  studentData:any=[];
    ngOnInit() {
     this.vinnu()
    }
    vinnu(){
      this.student.getAllStudents().subscribe((allData)=>{
        console.log(allData);
        this.studentData = allData;
      })
    }
    deleteStudent(student_id:any){
    this.student.deleteStudent(student_id).subscribe((result)=>{
      console.log(result);
      this.vinnu();
    })
    }
    edit(data:any){
      
this.router.navigateByUrl('/putdata');
// localStorage.setItem('name',JSON.stringify(data))
   this.student.behav.next(data)
       console.log(data,'Hello');
     
     
    }
  
}
