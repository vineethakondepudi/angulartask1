import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
show(un:any,p:any){
  console.log(un);
  console.log(p);
  
}

}
