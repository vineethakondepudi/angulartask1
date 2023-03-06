import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';
import { LazylaodingtaskRoutingModule } from './lazylaodingtask-routing.module';
import { LazylaodingtaskComponent } from './lazylaodingtask.component';


@NgModule({
  declarations: [
    LazylaodingtaskComponent
  ],
  imports: [
    CommonModule,
    LazylaodingtaskRoutingModule
  ]
})
export class LazylaodingtaskModule { 
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
