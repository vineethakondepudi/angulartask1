import { Component, OnInit } from '@angular/core';
import {  Observable,Subject,BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs';
import{ajax} from 'rxjs/ajax'
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent{
  constructor(private service:ObservableService){}
//Observable example
// myobservable=new Observable((observer:any)=>{
//   console.log("Observable starts");
//   setTimeout(() => {observer.next("vineetha");},3000);
//   setTimeout(() => {observer.next("koti");},2000);
//   setTimeout(() => {observer.next("sai");},1000);
//   setTimeout(() => {observer.next("prassu");;},4000);
//   })
// ngOnInit(){
//   this.myobservable.subscribe((val:any)=>{
//     console.log(val);
    
//   })
// }

 
//1.diff bw promises and observables
//   promise =new Promise((resolved)=>{
//     setTimeout(()=>{
//       resolved("Hello vineetha")
//       resolved("Hello vineetha")
//       resolved("Hello vineetha")
//       resolved("Hello vineetha")
//     },2000)
//     }).then((d)=>{
//     console.log(d);
    
//   })

// myObservable=new Observable((observer)=>{
//   setTimeout(()=>{
//     observer.next("Hello koti")
//     observer.next("Hello koti")
//     observer.next("Hello koti")
//     observer.next("Hello koti")
//   },2000)
  
// }).subscribe((d)=>{
//   console.log(d);
  
// })
 

//2.Observables are unicast
// myObservable=new Observable((observer)=>{
//   observer.next(Math.random())
// })

// //Subscriber1
// data1=this.myObservable.subscribe((d)=>{console.log(d);})
// //Subscriber2
// data2=this.myObservable.subscribe((d)=>{console.log(d);})
// //Subscriber3
// data3=this.myObservable.subscribe((d)=>{console.log(d);})

//3.Subject is multicast
// myObservable=new Subject()
// //Subscriber1
// data1=this.myObservable.subscribe(d=>console.log(d))
// //Subscriber2
// data2=this.myObservable.subscribe(d=>console.log(d))
// //Subscriber3
// data3=this.myObservable.subscribe(d=>console.log(d))
// data=this.myObservable.next(Math.random())



//4.Subjects are acts like data provider and data consumer  ex:data consumer

//Unicast
// data=ajax('http://172.17.10.41:8000/getdata')
// data1=this.data.subscribe(result=>console.log(result))
// data2=this.data.subscribe(result=>console.log(result))

//Multicast
// mySubject=new Subject();
// data=ajax('http://172.17.10.41:8000/getdata')
// data1=this.mySubject.subscribe(result=>console.log(result))
// data2=this.mySubject.subscribe(result=>console.log(result))
// result=this.data.subscribe(this.mySubject)

//5.diff bw sub and behavior sub

// mySubject=new Subject()

//Subscriber1
// data1=this.mySubject.subscribe((result)=>console.log('sub1'+result))
// data=this.mySubject.next(2020)

//Subscriber2
// data2=this.mySubject.subscribe((result)=>console.log('sub2'+result))//return nothing



// myBehavSub=new BehaviorSubject<number>(100);
// dat=this.myBehavSub.subscribe((result)=>console.log(`BehaviorSubject subscriber1 ${result}`))
// data4=this.myBehavSub.next(200)
// data5=this.myBehavSub.next(300)
// dat6=this.myBehavSub.subscribe((result)=>console.log(`BehaviorSubject subscriber2 ${result}`))


//6.Replay sub

// $replay=new ReplaySubject(1);
// data1=this.$replay.next('vineetha')
// data2=this.$replay.next('Sai')
// data3=this.$replay.next('Koti')
// data4=this.$replay.next('Bhavya')
// data5=this.$replay.next('Roja')
// data=this.$replay.subscribe(result=>console.log(`Subscriber1 ${result}`))
// data6=this.$replay.next('Get vaccinated');
// data7=this.$replay.next('Hello World');
// data8=this.$replay.next('Loading................');

// dataa=this.$replay.subscribe(result=>console.log(`Subscriber2 ${result}`))


//7.Async sub
// myAsyncSub=new AsyncSubject();
// data1=this.myAsyncSub.next('First')
// data2=this.myAsyncSub.next('Second')
// data4=this.myAsyncSub.complete();
// data3=this.myAsyncSub.next('Third')
// data=this.myAsyncSub.subscribe(result=>console.log(`Subscriber1 ${result}`))

// data5=this.myAsyncSub.next('Fourth')
// data6=this.myAsyncSub.next('Fiveth')
// dataa=this.myAsyncSub.subscribe(result=>console.log(`Subscriber2 ${result}`))




}

