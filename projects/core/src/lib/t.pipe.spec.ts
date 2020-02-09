import { TPipe } from './t.pipe';
import { ConfigurationService } from './ng5-basic/services/configuration.service';
import { ApplicationRef } from '@angular/core';

describe('TPipe', () => {
  it('create an instance', () => {
    const pipe = new TPipe(new ConfigurationService({}, new ApplicationRef());
    expect(pipe).toBeTruthy();
  });
});
