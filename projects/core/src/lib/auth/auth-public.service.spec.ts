import { TestBed, inject } from '@angular/core/testing';

import { AuthPublicService } from './auth-public.service';

describe('AuthPublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPublicService]
    });
  });

  it('should be created', inject([AuthPublicService], (service: AuthPublicService) => {
    expect(service).toBeTruthy();
  }));
});
