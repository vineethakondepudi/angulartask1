import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/studentenroll';
// import { EnrollService } from '../Services/studentenroll';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css'],
  // providers:[EnrollService]
})
export class Student2Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // public students=[{}];
  // constructor(private _student:StudentserviceService){}
  // ngOnInit() {
  //   this.students=this._student.getstudent();
  // }
  title='Student2';
  Onenroll(){
    const enrollService=new EnrollService();
    enrollService.OnEnrollClicked(this.title)
  }
}
