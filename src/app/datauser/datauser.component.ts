import { Component, OnInit } from '@angular/core';
import { Userservice } from '../Services/user.service';

@Component({
  selector: 'app-datauser',
  templateUrl: './datauser.component.html',
  styleUrls: ['./datauser.component.css'],
  providers:[Userservice]
})
export class DatauserComponent implements OnInit{

  username:string='';
  skillset:string='';
constructor(private userservice:Userservice){}

  ngOnInit() {
    
  }
  
  AddUser(){
    this.userservice.AddNewUser(this.username,this.skillset);
    console.log(this.userservice.users);
    
  }
}

