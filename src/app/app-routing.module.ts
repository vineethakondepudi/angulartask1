import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdiminHomeGuard } from './adimin-home.guard';
import { CorrectroutingComponent } from './correctrouting/correctrouting.component';
import { EditComponent } from './edit/edit.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormdeactiveComponent } from './formdeactive/formdeactive.component';
import { AdminHomechildGuard } from './guards/admin-homechild.guard';
import { AdmindeactiveGuard } from './guards/admindeactive.guard';
import { PatchmethodComponent } from './patchmethod/patchmethod.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostmethodComponent } from './postmethod/postmethod.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Student1Component } from './student1/student1.component';


const routes: Routes = [
 
{path:'reactiveform',component:ReactiveformComponent},

{path:'post',component:PostmethodComponent},
{path:'putdata',component:EditComponent},
{path:'patch',component:PatchmethodComponent},
{path:'student',component:Student1Component},
 {path:'qqq',component:CorrectroutingComponent,canActivate:[AdiminHomeGuard]},
 {path:'about',component:PipesComponent,canActivateChild:[AdminHomechildGuard]},
 {path:'deactive',component:FormdeactiveComponent,canDeactivate:[AdmindeactiveGuard],

children:[
  {path:'reactive',component:ReactiveformComponent},
 
    {path:'fb',component:FormBuilderComponent}
  
]},
{ path: 'lazyloading', loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
