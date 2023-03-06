import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterComponent } from '../register/register.component';
import { LazylaodingtaskComponent } from './lazylaodingtask.component';

const routes: Routes = [{ path: '', component: LazylaodingtaskComponent },
                        {path:'login',component:LoginFormComponent,
                      children:[
                        {path:'reg',component:RegisterComponent}
                      ]},
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazylaodingtaskRoutingModule { }
