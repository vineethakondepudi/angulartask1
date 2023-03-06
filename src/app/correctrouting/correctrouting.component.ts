import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-correctrouting',
  templateUrl: './correctrouting.component.html',
  styleUrls: ['./correctrouting.component.css']
})
export class CorrectroutingComponent {
  constructor(private route:Router){}
 navigate(){
 this.route.navigate(['pipe'])
 }
 
}
