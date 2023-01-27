import { Component } from '@angular/core';
import{FormGroup,FormBuilder,FormControl} from '@angular/forms'
// import { FormArray,FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
constructor(private fb:FormBuilder){}

login=this.fb.group({
  un:[],
  pw:[]
})
show(){
  console.log(this.login.value);
  
}
}
