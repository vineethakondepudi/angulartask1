import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { product } from '../life-cycle-hook-parent/product';

@Component({
  selector: 'app-life-cycle-hook-child',
  templateUrl: './life-cycle-hook-child.component.html',
  styleUrls: ['./life-cycle-hook-child.component.css']
})
export class LifeCycleHookChildComponent implements OnInit{
 @Input() parent:any;

 @Input() product:any
//  data=''
// changes='changing.........'
constructor(){
  console.log("constructor");
  
}
  
  ngOnInit() {
    console.log("oninit");
    
  }
  ngOnChanges(changes:SimpleChange) {
    console.log("changes",changes);
    
  }
  ngDoCheck(){
    console.log("Do check",this.product);
    
  }
}
