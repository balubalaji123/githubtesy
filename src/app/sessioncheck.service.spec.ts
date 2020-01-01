import { TestBed } from '@angular/core/testing';

import { SessioncheckService } from './sessioncheck.service';

describe('SessioncheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessioncheckService = TestBed.get(SessioncheckService);
    expect(service).toBeTruthy();
  });
});
