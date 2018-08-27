import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageintegrationComponent } from './manageintegration.component';

describe('ManageintegrationComponent', () => {
  let component: ManageintegrationComponent;
  let fixture: ComponentFixture<ManageintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
