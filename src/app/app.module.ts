import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CutomerComponent } from './cutomer/cutomer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StructuralComponent } from './structural/structural.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { HeaderComponent } from './header/header.component';
import { DefaultComponent } from './default/default.component';
import { CorrectroutingComponent } from './correctrouting/correctrouting.component';
import { AdiminHomeGuard } from './adimin-home.guard';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';
import { StudentserviceService } from './studentservice.service';
import { ObservableComponent } from './observable/observable.component';
import { AdminHomechildGuard } from './guards/admin-homechild.guard';
import { FormdeactiveComponent } from './formdeactive/formdeactive.component';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http'
import { AdmindeactiveGuard } from './guards/admindeactive.guard';
import { DatauserComponent } from './datauser/datauser.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab 
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { PostmethodComponent } from './postmethod/postmethod.component';
import { HttpmethodsComponent } from './httpmethods/httpmethods.component';
import { EditComponent } from './edit/edit.component';
import { DeletemethodComponent } from './deletemethod/deletemethod.component';
import { PatchmethodComponent } from './patchmethod/patchmethod.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {TableModule} from 'primeng/table';
import { ObservableChildComponent } from './observable-child/observable-child.component';
import { ObservableParentComponent } from './observable-parent/observable-parent.component';
import { Customepipe1Pipe } from './customepipe1.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeadersInterceptor } from './headers.interceptor';
import { LazyloadingModule } from "./lazyloading/lazyloading.module";
import { SpeclessComponent } from './specless/specless.component';
import { ChartsComponent } from './charts/charts.component';

import {ChartModule} from 'primeng/chart';
import { GetmethodComponent } from './getmethod/getmethod.component';
import { LifeCycleHookParentComponent } from './life-cycle-hook-parent/life-cycle-hook-parent.component';
import { LifeCycleHookChildComponent } from './life-cycle-hook-child/life-cycle-hook-child.component';
import { LoginFormComponent } from './lazyloadingtask/login-form/login-form.component';
import { RegisterComponent } from './lazyloadingtask/register/register.component';
import { MediaqueriesComponent } from './mediaqueries/mediaqueries.component';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatabindingComponent } from './databinding/databinding.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';



const appRoutes: Routes=[
  {path:'',component:HomeComponent},//localhost:4200
  {path:'cutomer',component:CutomerComponent},//localhost:4200/customers
  {path:'category',component:CutomerComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CutomerComponent,
        FormComponent,
        ReactiveformComponent,
        StructuralComponent,
        PipesComponent,
        CustompipePipe,
        FormBuilderComponent,
        Child1Component,
        Parent1Component,
        HeaderComponent,
        DefaultComponent,
        CorrectroutingComponent,
        Student1Component,
        Student2Component,
        ObservableComponent,
        FormdeactiveComponent,
        DatauserComponent,
        PostmethodComponent,
        GetmethodComponent,
        HttpmethodsComponent,
        EditComponent,
        PatchmethodComponent,
        AddStudentComponent,
        ListStudentComponent,
        ObservableChildComponent,
        ObservableParentComponent,
        Customepipe1Pipe,
        DeletemethodComponent,
        SpeclessComponent,
        ChartsComponent,
        LifeCycleHookParentComponent,
        LifeCycleHookChildComponent,
        LoginFormComponent,
        RegisterComponent,
        MediaqueriesComponent,
        DatabindingComponent,
        ApicomponentComponent,
        AttributeDirectiveComponent
       
        


    ],
    providers: [AdiminHomeGuard, StudentserviceService, AdminHomechildGuard, AdmindeactiveGuard,
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },FlexLayoutModule
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AccordionModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        LazyloadingModule,
        ChartModule,
        MatIconModule,
        FlexLayoutModule
        
    ]
})
export class AppModule { }
