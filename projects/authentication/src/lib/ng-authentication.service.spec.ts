import { TestBed, inject } from '@angular/core/testing';

import { NgAuthenticationService } from './ng-authentication.service';

describe('NgAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAuthenticationService]
    });
  });

  it('should be created', inject([NgAuthenticationService], (service: NgAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
