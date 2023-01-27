import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  postForm: FormGroup |any;
  FormGroup:any;
  res:any;
  show:boolean=false;
  item: any;
  close:boolean=false;


  //inserform (post method)
  
addStudent =new FormGroup({
    sid:new FormControl(''),
    sname:new FormControl(''),
    department:new FormControl(''),
    phonenumber:new FormControl(''),
})
  open()
  {
this.show=true
  }
  saveDate(){
  this.show=false;
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
   
      this.vinnu();
    })
  }


  //table  (get method)
studentData:any=[];
  ngOnInit() {
   this.vinnu();
  }
  
vinnu(){
  this.student.getAllStudents().subscribe((allData)=>{
    console.log(allData);
    this.studentData = allData;
  })
}

// (delete method)
deleteStudent(student_id:any){
  this.student.deleteStudent(student_id).subscribe((result)=>{
    console.log(result);
    this.vinnu();
  })
  }


  
  edit(data:any){
    console.log(data);
    
    this.postForm.controls['sid'].setValue(data.sid)
    this.postForm.controls['sname'].setValue(data.sname)
    this.postForm.controls['department'].setValue(data.department)
    this.postForm.controls['phonenumber'].setValue(data.phonenumber)
    this.student.updateStudent(data).subscribe((result:any)=>{
      this.addStudent =new FormGroup({
        sid:new FormControl(result['sid']),
        sname:new FormControl(result['sname']),
        department:new FormControl(result['department']),
        phonenumber:new FormControl(result['phonenumber']),
    })
    })
    this.close=true;
    
  }


  //update  (put method)
  constructor(private student:StudentsService,private fb:FormBuilder){
    this.postForm=this.fb.group({
      sid:[''],
      sname:[''],
      department:[''],
      phonenumber:[' ']
    })
    
  }
 submit(){
  console.log(this.postForm.value);
  this.student.updateStudent(this.postForm.value).subscribe((result)=>{
    console.log(result);
    this.vinnu();
    this.close=false;
  })
 }
  

  }


