import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Student1Component } from '../student1/student1.component';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  postForm: FormGroup ;
  FormGroup:any;
  constructor(private fb:FormBuilder,public student:StudentsService){
   
   this.postForm=this.fb.group({
     sid:['sid'],
     sname:['sname'],
     department:['department'],
     phonenumber:['phonenumber']
   })

  }
  ngOnInit(): void {
     var x=JSON.parse(localStorage.getItem('name') || '')
     this.postForm.controls['sid'].patchValue(x.sid)
     this.postForm.controls['sname'].patchValue(x.sname)
     this.postForm.controls['department'].patchValue(x.department)
     this.postForm.controls['phonenumber'].patchValue(x.phonenumber)
    // this.student.behav.subscribe((x)=>
    // {
      // this.postForm.controls['sid'].setValue(x.sid)
      // this.postForm.controls['sname'].setValue(x.sname)
      // this.postForm.controls['department'].setValue(x.department)
      // this.postForm.controls['phonenumber'].setValue(x.phonenumber)
    // })
  }
   submit(){
    // this.student.updateStudent(data).subscribe((res:any)=>{
    //   console.log(res);
      
    // })
    {
      let data={
      "sid":this.postForm.controls['sid'].value,
      "sname":this.postForm.controls['sname'].value,
      "department":this.postForm.controls['department'].value,
      "phonenumber":this.postForm.controls['phonenumber'].value
      }
      console.log(data,"updated data")
      this.student.updateStudent(data).subscribe((e)=>e)
   }
// editt:any

}
}
