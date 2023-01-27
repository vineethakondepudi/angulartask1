import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
a:any='vineetha';
constructor(private rotes:Router){}

navigate1(){
  this.rotes.navigateByUrl('about/fb')
}
}
