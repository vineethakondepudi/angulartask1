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
  console.warn(this.postForm.value);
  let data={
    "sid":this.postForm.controls['sid'].value,
    "sname":this.postForm.controls['sname'].value,
    "department":this.postForm.controls['department'].value,
    "phonenumber":this.postForm.controls['phonenumber'].value,
  }
  console.log(data);
  
    this.student.saveStudentData(data).subscribe((result:any)=>{
   console.log(result);
   
      
    })
  }

}

