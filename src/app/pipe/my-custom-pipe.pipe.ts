import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe',
  standalone: true
})
export class MyCustomPipePipe implements PipeTransform {

  /** Простой пайп который принимает на вход строку и возвращает перевернутую строку! */
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}
