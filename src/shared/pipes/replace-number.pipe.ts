import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replaceNumber'})
export class ReplaceNumberPipe implements PipeTransform {
  transform(value: string): string {
    return this.replaceFaNumbers(value);
  }


    // ? Replace Farsi Numbers With English
   private replaceFaNumbers(text: string) {
        const FaNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const EnNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
          if (text)
          {
              var result = text.replace(/./g, function (char) {
                  var idx = FaNumbers.indexOf(char);
                  return idx > -1 ? EnNumbers[idx] : char;
              });
              return result;
      
          }
          else return '';
      }
}