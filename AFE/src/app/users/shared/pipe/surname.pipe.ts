import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surname'
})
export class SurnamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value[0]}****${value[value.length - 1]}`;
  }

}
