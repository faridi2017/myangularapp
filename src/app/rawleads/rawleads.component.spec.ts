import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawleadsComponent } from './rawleads.component';

describe('RawleadsComponent', () => {
  let component: RawleadsComponent;
  let fixture: ComponentFixture<RawleadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawleadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
