import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  signupForm: FormGroup;
  constructor(public fb: FormBuilder,public router:Router) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],    
      password: [''],
    });



    
  }
  
  registerUser() {
    
      console.log(this.signupForm.value);
      
    
  }
  show(){
    this.router.navigate(['fb'])
  }
}
