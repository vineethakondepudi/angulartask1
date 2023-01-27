import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormdeactiveComponent } from '../formdeactive/formdeactive.component';


export interface CanComponenetLeave{
  canLeave:()=> boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AdmindeactiveGuard implements CanDeactivate<FormdeactiveComponent> {
  // constructor(){}
  
  canDeactivate(component: CanComponenetLeave){
    if(component.canLeave){
      return component.canLeave();
    }
    return true;
  }
  
}
