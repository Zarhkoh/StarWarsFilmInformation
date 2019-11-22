import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): any {
    if (value !== 'n/a' && value !== 'none') {
      return value[0].toUpperCase();
    }
    return value;
  }

}
