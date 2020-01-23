import { Pipe, PipeTransform } from '@angular/core';
import { ConfigurationService } from './ng5-basic/services/configuration.service';

@Pipe({
  name: 't'
})
export class TPipe implements PipeTransform {
  private keys: any = {};

  constructor(private config: ConfigurationService) {
    this.config.translationsDictionary.subscribe(keys => {
      this.keys = { ...keys };
    });
  }
  transform(value: any, ...args: any[]): any {
    const translatedPhrase = this.keys[value];

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
