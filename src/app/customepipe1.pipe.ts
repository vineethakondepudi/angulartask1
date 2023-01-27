import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe1'
})
export class Customepipe1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    this.uname=this.uname.toUpperCase()
    return this.uname;
  }
uname:string='koti'
}
