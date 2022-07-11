import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDate'
})
export class GetDatePipe implements PipeTransform {

  transform(PersonalID:any): any {
    return "19"+ PersonalID.slice(1,3)+"-"+ PersonalID.slice(3,5)+"-"+ PersonalID.slice(5,7);
  }

}
