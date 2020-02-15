import { TestBed } from '@angular/core/testing';

import { ChecksessionService } from './checksession.service';

describe('ChecksessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChecksessionService = TestBed.get(ChecksessionService);
    expect(service).toBeTruthy();
  });
});
