import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  parenttochild='';
  childtoparent='';
  receivedmsg(msg:any){
    this.childtoparent=msg;
  }
}
