import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecipantDetailComponent } from './partecipant-detail.component';

describe('PartecipantDetailComponent', () => {
  let component: PartecipantDetailComponent;
  let fixture: ComponentFixture<PartecipantDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartecipantDetailComponent]
    });
    fixture = TestBed.createComponent(PartecipantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
