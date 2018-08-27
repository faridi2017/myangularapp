import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyBookedComponent } from './already-booked.component';

describe('AlreadyBookedComponent', () => {
  let component: AlreadyBookedComponent;
  let fixture: ComponentFixture<AlreadyBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyBookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
