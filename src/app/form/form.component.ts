import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  username:any;
  pword:any;
constructor(private router:Router){}
show(un:any,p:any){
  console.log(un);
  console.log(p);
  this.router.navigate(['form/reactive'])
}
  canExit(){
    if(this.username  ||  this.pword){
      return confirm("Plzz fill this blank");
      
    }
    else{
      return true;
    }
  }
}
