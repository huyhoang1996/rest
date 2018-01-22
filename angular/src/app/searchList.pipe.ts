import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchList'
})

@Injectable()
export class SearchList implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!items) return [];
   console.log('pipe ',value);
   if (value === '') return [];
   return items.filter(result => result[field].indexOf(value) > -1 );
 }
}

