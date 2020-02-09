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
    return this.config.translate(value, args);
  }
}
