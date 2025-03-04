import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'joinStrings',
    standalone: false
})
export class JoinStringsPipe implements PipeTransform {
  transform(value: string[], separator?: string): string {
    return value.filter(Boolean).join(separator ? separator : ' - ');
  }
}
