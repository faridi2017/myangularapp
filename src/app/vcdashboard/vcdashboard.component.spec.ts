import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcdashboardComponent } from './vcdashboard.component';

describe('VcdashboardComponent', () => {
  let component: VcdashboardComponent;
  let fixture: ComponentFixture<VcdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
