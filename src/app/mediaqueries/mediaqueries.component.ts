import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-mediaqueries',
  templateUrl: './mediaqueries.component.html',
  styleUrls: ['./mediaqueries.component.css']
})
export class MediaqueriesComponent implements OnInit,OnDestroy {
  mediaSub: Observable<any> | undefined;
 constructor(private mediaObserver:MediaObserver){}
  ngOnInit(): void {
   
  }
  ngOnDestroy(): void {
    
  }
}
