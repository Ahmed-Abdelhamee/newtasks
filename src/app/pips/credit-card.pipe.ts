import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(data:any): any {
    return data.slice(0,4)+"-"+data.slice(4,8)+"-"+data.slice(8,12)+"-"+data.slice(12,16);
  }

}
