import { TestBed } from '@angular/core/testing';

import { LearningresourceService } from './learningresource.service';

describe('LearningresourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningresourceService = TestBed.get(LearningresourceService);
    expect(service).toBeTruthy();
  });
});
