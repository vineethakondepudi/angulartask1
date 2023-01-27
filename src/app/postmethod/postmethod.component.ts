import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-postmethod',
  templateUrl: './postmethod.component.html',
  styleUrls: ['./postmethod.component.css']
})
export class PostmethodComponent {
  constructor(private student:StudentsService){}
  postForm: FormGroup |any;
  FormGroup:any;
  res:any;
 
  item: any;
  close:boolean=false;


  //inserform (post method)
  
addStudent =new FormGroup({
    sid:new FormControl(''),
    sname:new FormControl(''),
    department:new FormControl(''),
    phonenumber:new FormControl(''),
})
  
  saveDate(){
  
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
   console.log(this.addStudent);
   
      
    })
  }

}

