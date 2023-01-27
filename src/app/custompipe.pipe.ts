import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]):any {
    this.uname=this.uname.toUpperCase()
    return this.uname;
  }
uname:string='vineetha';

}
