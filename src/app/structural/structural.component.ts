import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  //NgIf
show:boolean=true;

//NgFor
names=['vinnu','sai','koti']

//NgSwitch
num1:number=6;
num2:number=10;
name:string='vineetha';

//Ngswitch
colors:boolean=true;
color:string="red";
}
