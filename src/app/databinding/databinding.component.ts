import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
name:string="Vineetha";

Active:boolean=false;

counter:number=0;
show(){
this.counter+=1
}

isactive:boolean=true;

styl:object={
  'color':'red'
}

city:string="vendra";
update(){
  this.city="Kakinada"
}
}
