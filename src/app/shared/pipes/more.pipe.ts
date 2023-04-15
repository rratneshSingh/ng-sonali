import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(value: unknown, limit = 15, trail = '....' ): string {
    if ( typeof value === 'string' ) {
      if ( value.length > limit ) {
        return value.substring(0, limit) + trail;
      }
      return value;
    }
    return 'Not A String';
  }

}
