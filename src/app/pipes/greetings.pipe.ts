import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    let horaAtual = new Date().getHours();

    if( horaAtual > 4 && horaAtual <= 11 ){
       value = "Bom dia " + value;
    }else if( horaAtual >= 12 && horaAtual <= 18  ){
      value = "Boa Tarde " + value;
    }else {
      value = "Boa Noite " + value;
    }

    return value;
  }

}
