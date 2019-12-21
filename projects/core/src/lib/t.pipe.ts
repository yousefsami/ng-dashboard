import { Pipe, PipeTransform } from '@angular/core';
import { ConfigurationService } from './ng5-basic/services/configuration.service';

@Pipe({
  name: 't'
})
export class TPipe implements PipeTransform {
  constructor(private config: ConfigurationService) {}
  transform(value: any, ...args: any[]): any {
    const translatedPhrase = this.config.translationsDictionary[value];

    if (!translatedPhrase) {
      console.warn(
        'There is no translation for',
        value,
        '>>>>',
        this.config.language.value
      );
    }
    return translatedPhrase || value;
  }
}
