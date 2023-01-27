import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-observable-parent',
  templateUrl: './observable-parent.component.html',
  styleUrls: ['./observable-parent.component.css']
})
export class ObservableParentComponent {
 postForm:FormGroup|any
 constructor(private student:ObservableService){}
 
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
    
    })
  
    
  }


  
}
