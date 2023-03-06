import { Injectable } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<FormComponent> {
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return component.canExit();
  }
  
}
