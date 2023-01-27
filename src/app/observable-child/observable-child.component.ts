import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-observable-child',
  templateUrl: './observable-child.component.html',
  styleUrls: ['./observable-child.component.css']
})
export class ObservableChildComponent {
  postForm:FormBuilder|any
  constructor(private student:ObservableService,private fb:FormBuilder){
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
    
  })
 }
  
}
