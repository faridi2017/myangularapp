import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentleadsComponent } from './currentleads.component';

describe('CurrentleadsComponent', () => {
  let component: CurrentleadsComponent;
  let fixture: ComponentFixture<CurrentleadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentleadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
