import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component{
  
  @Input()
  name:any
 
  @Output()
  childtoparentEmitter=new EventEmitter
  childtoparent(m:any){
        this.childtoparentEmitter.emit(m.target.value)
  }
  constructor(){}
}
