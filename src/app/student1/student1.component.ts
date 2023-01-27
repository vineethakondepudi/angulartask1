import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/studentenroll';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.css'],
  providers:[EnrollService]
})
export class Student1Component implements OnInit {

students: any;
x: any;
errormsg:any;
  constructor(private _student:StudentserviceService){
    this._student.getstudent()
    .subscribe(data =>this.students=data , error =>this.errormsg = error)
      console.log(this.students);
      
    
//   }
//   delete(name:string){
//     // this._student.deleteproduct(name)
//   }
//   edit(name:string){
//     // this._student.editproduct(name)
//   }
  


// title='Student1';

// constructor(private enrollservice:EnrollService){}
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   Onenroll(){
//     const enrollService=new EnrollService();
//     enrollService.OnEnrollClicked(this.title)
  }
  submit(){
    console.warn(this._student);
    
  }
  ngOnInit(): void {
    
  }
 

  // ngOnInit() {
  //   this.enrollservice.OnEnrollClicked(this.title)
  // }
}