import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{
  postForm: FormGroup ;
  FormGroup:any;
  res:any;
  
  

  constructor(private fb:FormBuilder,private student:StudentsService,private router:Router){

   this.postForm=this.fb.group({
     sid:[''],
     sname:[''],
     department:[''],
     phonenumber:[' ']
   })
   
  }
  
  submit(){
    
}

studentData:any=[];
  ngOnInit() {
    this.student.getAllStudents().subscribe((allData)=>{
      console.log(allData);
      this.studentData = allData;
    })
  }
  deleteStudent(student_id:any){
  this.student.deleteStudent(student_id).subscribe((result)=>{
    console.log(result);
    
  })
  }
  edit(data:any){

    this.postForm.controls['sid'].setValue(data.sid);

  //  let cuttentproduct= this.studentData.find((p:any)=>{return p.sid===data})
  //  console.log(cuttentproduct);
  //  var a=JSON.parse(localStorage.getItem('name') || '')
  //  this.postForm.controls['sid'].patchValue(a.sid)
  //  this.postForm.controls['sname'].patchValue(a.sname)
  //  this.postForm.controls['department'].patchValue(a.department)
  //  this.postForm.controls['phonenumber'].patchValue(a.phonenumber)
   
    
  }
}
