import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponenetLeave } from '../guards/admindeactive.guard';

@Component({
  selector: 'app-formdeactive',
  templateUrl: './formdeactive.component.html',
  styleUrls: ['./formdeactive.component.css']
})
export class FormdeactiveComponent implements CanComponenetLeave {
  userName:FormControl=new FormControl();
canLeave():boolean {
  if(this.userName.dirty){
  return  window.confirm("You have some unsaved changes,Save it before leaving")
  }
  return true;
}
}