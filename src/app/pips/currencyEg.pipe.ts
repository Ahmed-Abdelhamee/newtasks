import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyEgPipe implements PipeTransform {

  transform(data:number): any {
    return data + " LE";
  }

}
