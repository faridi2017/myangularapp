import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VchomeComponent } from './vchome.component';

describe('VchomeComponent', () => {
  let component: VchomeComponent;
  let fixture: ComponentFixture<VchomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VchomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VchomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
