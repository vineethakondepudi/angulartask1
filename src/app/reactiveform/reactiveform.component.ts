import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  signupForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],    
      password: [''],
    });
  }

  registerUser() {
    
      console.log(this.signupForm.value);
      
    
  }
}
