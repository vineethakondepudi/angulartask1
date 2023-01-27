import { Component } from '@angular/core';
import { product } from './product';
@Component({
  selector: 'app-life-cycle-hook-parent',
  templateUrl: './life-cycle-hook-parent.component.html',
  styleUrls: ['./life-cycle-hook-parent.component.css']
})
export class LifeCycleHookParentComponent {
  // parentToChild='';


  product:product=new product();
  name: any
  price:any
  data: any;
  parentToChild(e:any){
   this.data =e.target.value
  }
  updateProduct(){
    this.product=new product();//Dirty checking 
 this.product.name=this.name;
 this.product.price=this.price;
  }
}
