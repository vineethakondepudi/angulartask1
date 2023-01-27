import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-patchmethod',
  templateUrl: './patchmethod.component.html',
  styleUrls: ['./patchmethod.component.css']
})
export class PatchmethodComponent {
  postForm: FormGroup ;
  FormGroup:any;
  constructor(private fb:FormBuilder,private api:ApiserviceService){
    
   this.postForm=this.fb.group({
     sid:[''],
     sname:[''],
     department:[''],
     phonenumber:['']
   })
   var a=JSON.parse(localStorage.getItem('data') || '')
   this.postForm.controls['sid'].patchValue(a.sid)
   this.postForm.controls['sname'].patchValue(a.sname)
   this.postForm.controls['department'].patchValue(a.depatment)
   this.postForm.controls['phonenumber'].patchValue(a.phonenumber)
  }
  
   submit(data: any){
    this.api.putmethod(data).subscribe((res:any)=>{
      console.log(res);
      
    })
   }
editt:any
}
