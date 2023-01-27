import { Component, OnInit } from '@angular/core';
import { Userservice } from '../Services/user.service';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.css'],
  providers:[Userservice]
})

export class DataserviceComponent implements OnInit {
//Data service
constructor(private userservice:Userservice){}
users:{name:string,skillset:string}[]=[];
ngOnInit(){
  this.users=this.userservice.users;
}
}
