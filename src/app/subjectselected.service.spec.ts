import { TestBed } from '@angular/core/testing';

import { SubjectselectedService } from './subjectselected.service';

describe('SubjectselectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectselectedService = TestBed.get(SubjectselectedService);
    expect(service).toBeTruthy();
  });
});
