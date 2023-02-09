import { TestBed } from '@angular/core/testing';

import { ArticlesdatatableService } from './articlesdatatable.service';

describe('ArticlesdatatableService', () => {
  let service: ArticlesdatatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesdatatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
