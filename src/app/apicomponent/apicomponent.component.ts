import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-apicomponent',
  templateUrl: './apicomponent.component.html',
  styleUrls: ['./apicomponent.component.css']
})
export class ApicomponentComponent {
resul:any;
constructor(private user:ApiserviceService){
  this.user.getmethod().subscribe(data=>{
    this.resul=JSON.stringify(data);
    console.log(this.resul);
    
  })
}
}
