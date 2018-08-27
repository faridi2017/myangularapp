import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcnavigationComponent } from './vcnavigation.component';

describe('VcnavigationComponent', () => {
  let component: VcnavigationComponent;
  let fixture: ComponentFixture<VcnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
