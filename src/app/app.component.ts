import { Component, OnInit } from '@angular/core';
import { observable, reduce } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
title(title: any) {
  throw new Error('Method not implemented.');
}

  // title = 'angulartask1';
  
  h='vineetha';
  isdisabled:boolean=true;
  counter:number=0;
  event(){
    this.counter+=1
  }

  isactive:boolean=true;
a:object={
  color:'pink',
}


city='vendra';
updatecity(){
  this.city="kakinada"
}

//attribute directives

styles(){
  return{
  'color':'red',
  'font-family':'italic',
  'background-color':'yellow',
  'font-size':'20px'
}
}

//structural directives
// show1:boolean=true;
// names=['vinnu','sai','kumar']
// name='vineetha';



//Data service
// users:{name:string,skillset:string}[]=[];
// ngOnInit(){}
}


