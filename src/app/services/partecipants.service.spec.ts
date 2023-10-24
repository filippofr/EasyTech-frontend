import { TestBed } from '@angular/core/testing';

import { PartecipantsService } from './partecipants.service';

describe('PartecipantsService', () => {
  let service: PartecipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartecipantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
