import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortpipePipe implements PipeTransform {

  transform(array: any[], property: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array || !property) return array;

    return array.sort((x, y) => {
      let valueX = x[property].toString().toLowerCase();
      let valueY = y[property].toString().toLowerCase();

      if (valueX > valueY) return order === 'asc' ? 1 : -1;
      if (valueX < valueY) return order === 'asc' ? -1 : 1;
      return 0;
    });
  }

}
